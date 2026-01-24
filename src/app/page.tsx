'use client';

import React, { useState, useEffect, Suspense, useRef, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { textbooks } from '@/data/textbooks';
import TextbookCard from '@/components/TextbookCard';
import DailyDiscussion from '@/components/DailyDiscussion';
import SmallTalkCards from '@/components/SmallTalkCards';

// Using Textbook type from @/data/textbooks/types is implicit or can be imported if needed explicitly
// but 'textbooks' is already typed.

function HomeContent() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'textbooks' | 'extra' | 'others'>('textbooks');
  const [otherFeature, setOtherFeature] = useState<'none' | 'daily_discussion' | 'small_talk'>('none');

  // Filter State
  const [levelFilter, setLevelFilter] = useState<string>('All');
  const [isInitialized, setIsInitialized] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Initial load count for performance

  const router = useRouter();
  const searchParams = useSearchParams();

  // Load Filter State from Storage
  useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('levelFilter');
      if (stored) {
        // eslint-disable-next-line
        setLevelFilter(stored);
      }
      setIsInitialized(true);
    }
  }, []);

  // Persist Filter State
  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized) {
      sessionStorage.setItem('levelFilter', levelFilter);
    }
  }, [levelFilter, isInitialized]);

  // Reset Logic
  useEffect(() => {
    if (searchParams.get('reset')) {
      // eslint-disable-next-line
      setActiveTab('textbooks');
      setLevelFilter('All');
      setOtherFeature('none');
      // Clear storage on reset
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('levelFilter');
      }
      // Clean up URL
      router.replace('/');
    }
  }, [searchParams, router]);

  // Click outside to close Logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If clicking outside of any button interaction, clear hover
      // We can check if the target is within the level selector container if we had a ref,
      // but a simple approach is: if we are hovering/showing a menu, and click happens elsewhere, close it.
      // However, we need to allow clicks on the buttons themselves.
      const target = event.target as HTMLElement;
      // Close if clicking outside the dropdown AND not clicking a parent button (which handles its own toggling)
      if (!target.closest('.child-level-dropdown') && !target.closest('.parent-level-btn')) {
        setHoveredRange(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Scroll to Textbook Logic (Returning from specific textbook)
  useEffect(() => {
    const returnToTextbookId = searchParams.get('returnTo');
    if (returnToTextbookId) {
      // Small timeout to ensure rendering is complete
      setTimeout(() => {
        const element = document.getElementById(`textbook-${returnToTextbookId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Optional: Clean up URL after successful scroll without refreshing
          // router.replace('/', { scroll: false }); 
          // Keeping it might be better if user refreshes, but standard behavior usually clears.
          // For now, let's leave the param so it's clear why we scrolled.
        }
      }, 300); // Increased timeout slightly to ensure grid layout is stable
    }
  }, [searchParams]);

  // Reset visible count when filter or tab changes
  useEffect(() => {
    setVisibleCount(12);
  }, [levelFilter, activeTab]);

  const filteredTextbooks = useMemo(() => {
    return textbooks.filter(textbook => {
      if (levelFilter === 'All') return true;

      // Handle JLPT levels (e.g., N5) - exact match
      if (levelFilter.startsWith('N')) {
        return textbook.level === levelFilter;
      }

      // Handle Range Filters (e.g. "Level 1-3")
      if (levelFilter.includes('-')) {
        const match = levelFilter.match(/Level (\d+)-(\d+)/);
        if (match) {
          const min = parseInt(match[1], 10);
          const max = parseInt(match[2], 10);

          // Extract numeric level from textbook
          let textbookLvl = 0;
          if (typeof textbook.level === 'number') {
            textbookLvl = textbook.level;
          } else if (typeof textbook.level === 'string' && textbook.level.startsWith('Level')) {
            const m = textbook.level.match(/\d+/);
            textbookLvl = m ? parseInt(m[0], 10) : 0;
          }

          return textbookLvl >= min && textbookLvl <= max;
        }
      }

      // Fallback for single levels (though we are switching to ranges mostly)
      // Or if textbook level format doesn't match expectations
      let textbookLevelStr = '';
      if (typeof textbook.level === 'number') {
        textbookLevelStr = `Level ${textbook.level}`;
      } else {
        if (textbook.level.startsWith('Level') || textbook.level.startsWith('N')) {
          textbookLevelStr = textbook.level;
        } else {
          textbookLevelStr = `Level ${textbook.level}`;
        }
      }

      return textbookLevelStr === levelFilter;
    }).sort((a, b) => {
      const getDifficultyScore = (lvl: number | string) => {
        // Numeric levels: 1 -> 10, 2 -> 20...
        if (typeof lvl === 'number') return lvl * 10;

        // String Level X
        if (lvl.startsWith('Level')) {
          const match = lvl.match(/\d+/);
          return match ? parseInt(match[0], 10) * 10 : 0;
        }

        // JLPT N X
        if (lvl.startsWith('N')) {
          const match = lvl.match(/\d+/);
          const num = match ? parseInt(match[0], 10) : 5;
          // Place after numeric levels. Ensure it's always last (base 10000)
          return 10000 + (6 - num) * 10;
        }
        return 99999;
      };
      return getDifficultyScore(a.level) - getDifficultyScore(b.level);
    });
  }, [levelFilter]);

  const visibleTextbooks = useMemo(() => {
    return filteredTextbooks.slice(0, visibleCount);
  }, [filteredTextbooks, visibleCount]);

  // Filter Groups - Updated
  const levelRanges = [
    { label: 'Level 1-5', min: 1, max: 5 },
    { label: 'Level 6-10', min: 6, max: 10 },
    { label: 'Level 11-15', min: 11, max: 15 },
    { label: 'Level 16-20', min: 16, max: 20 },
    { label: 'Level 21-25', min: 21, max: 25 },
    { label: 'Level 26-30', min: 26, max: 30 },
    { label: 'Level 31-35', min: 31, max: 35 },
    { label: 'Level 36-40', min: 36, max: 40 },
    { label: 'Level 41-45', min: 41, max: 45 },
    { label: 'Level 46-50', min: 46, max: 50 },
  ];
  const levelsJLPT = ['N5', 'N4', 'N3', 'N2', 'N1'];

  // Sub-navigation State
  const [hoveredRange, setHoveredRange] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (rangeLabel: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredRange(rangeLabel);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredRange(null);
    }, 300);
  };

  // Logic to calculate which range is currently "active" based on the filter (for styling)
  const selectedRangeLabel = (() => {
    // Try to determine range from levelFilter
    if (levelFilter === 'All') return null;
    if (levelFilter.includes('-')) {
      return levelRanges.find(r => r.label === levelFilter)?.label || null;
    }
    const match = levelFilter.match(/Level (\d+)/);
    if (match) {
      const lvl = parseInt(match[1], 10);
      return levelRanges.find(r => lvl >= r.min && lvl <= r.max)?.label || null;
    }
    return null;
  })();

  // const activeRangeObj = levelRanges.find(r => r.label === currentDisplayRange); // Removed usage

  const renderLevelRangeButton = (range: typeof levelRanges[0]) => {
    // Styling: Highlight if it is the current filter or contains the current filter
    const isRangeSelected = selectedRangeLabel === range.label;
    const isExactMatch = levelFilter === range.label;

    // Visibility: Only show if strictly hovered (or clicked-to-open which sets hover)
    const isMenuOpen = hoveredRange === range.label;

    return (
      <div
        key={range.label}
        style={{ position: 'relative' }}
        onMouseEnter={() => handleMouseEnter(range.label)}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="parent-level-btn"
          onClick={() => {
            setLevelFilter(range.label);
            handleMouseEnter(range.label);
          }}
          onMouseEnter={(e) => {
            // Only change style if NOT selected/highlighted
            if (!isExactMatch && !(isRangeSelected && levelFilter !== 'All')) {
              e.currentTarget.style.backgroundColor = 'var(--text-main)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = 'var(--text-main)';
            }
          }}
          onMouseLeave={(e) => {
            // Only reset if NOT selected/highlighted. 
            // Note: If it IS selected, the inline style prop below takes precedence on re-render, 
            // but manually resetting here ensures no stickiness if state hasn't updated yet.
            if (!isExactMatch && !(isRangeSelected && levelFilter !== 'All')) {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-color)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }
          }}
          style={{
            padding: '6px 16px',
            borderRadius: '16px',
            // Highlight if it's the exact filter OR if it contains the current specific level filter
            backgroundColor: (isExactMatch || (isRangeSelected && levelFilter !== 'All')) ? 'var(--accent-yellow)' : 'transparent',
            color: (isExactMatch || (isRangeSelected && levelFilter !== 'All')) ? 'var(--text-main)' : 'var(--text-color)',
            border: (isExactMatch || (isRangeSelected && levelFilter !== 'All')) ? '1px solid var(--accent-yellow)' : '1px solid var(--border-color)',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s',
            position: 'relative'
          }}
        >
          {range.label}
        </button>

        {/* Dropdown / Popover for Sub-levels */}
        {isMenuOpen && (
          <div

            className="animate-fade-in child-level-dropdown"
            // Stop click propagation to prevent closing immediately
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '120%', // Just below the button
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'row',
              gap: '0.3rem', // Tighter gap
              padding: '0.6rem 0.8rem', // Compact padding
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 8px 24px rgba(89, 67, 53, 0.15)', // Stronger shadow
              zIndex: 100,
              width: 'max-content',
              minWidth: '200px', // Ensure enough width
              maxWidth: '300px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {Array.from({ length: range.max - range.min + 1 }, (_, i) => range.min + i).map((lvl, index) => {
              const lvlStr = `Level ${lvl}`;
              return (
                <button
                  key={lvl}
                  className="child-level-btn"
                  onClick={(e) => {
                    setLevelFilter(lvlStr);
                  }}
                  onMouseEnter={(e) => {
                    if (levelFilter !== lvlStr) {
                      e.currentTarget.style.backgroundColor = 'var(--text-main)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--text-main)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (levelFilter !== lvlStr) {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = 'var(--text-color)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }
                  }}
                  style={{
                    padding: '6px 14px', // Comfortable tap target
                    borderRadius: '10px',
                    backgroundColor: levelFilter === lvlStr ? 'var(--text-main)' : '#fff',
                    color: levelFilter === lvlStr ? 'white' : 'var(--text-color)',
                    border: levelFilter === lvlStr ? '1px solid var(--text-main)' : '1px solid var(--border-color)',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    minWidth: '40px', // Minimum width for single digits

                    // Staggered Animation
                    opacity: 0,
                    animation: 'slideDownFade 0.3s ease forwards',
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container" style={{ position: 'relative' }}>

      {/* Top Navigation Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem', position: 'relative', zIndex: 20 }}>
        <button
          onClick={() => { setActiveTab('textbooks'); setOtherFeature('none'); }}
          style={{
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: activeTab === 'textbooks' ? 'var(--accent-red)' : 'transparent',
            color: activeTab === 'textbooks' ? 'white' : 'var(--text-color)',
            border: activeTab === 'textbooks' ? '2px solid var(--accent-red)' : '2px solid var(--border-color)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Textbooks
        </button>
        <button
          onClick={() => { setActiveTab('extra'); setOtherFeature('none'); }}
          style={{
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: activeTab === 'extra' ? 'var(--accent-red)' : 'transparent',
            color: activeTab === 'extra' ? 'white' : 'var(--text-color)',
            border: activeTab === 'extra' ? '2px solid var(--accent-red)' : '2px solid var(--border-color)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Extra Content
        </button>
        <button
          onClick={() => { setActiveTab('others'); setOtherFeature('none'); }}
          style={{
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: activeTab === 'others' ? 'var(--accent-red)' : 'transparent',
            color: activeTab === 'others' ? 'white' : 'var(--text-color)',
            border: activeTab === 'others' ? '2px solid var(--accent-red)' : '2px solid var(--border-color)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Let's talk
        </button>
      </div>

      {/* Textbooks Content Area */}
      {activeTab === 'textbooks' && (
        <div className="animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>


            {/* Filter Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>



              {/* Textbook Levels Row */}
              <div className="level-selector-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center', position: 'relative', zIndex: 50 }}>
                {/* Row 1: Levels 1-30 */}
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: '#7f8c8d', marginRight: '0.5rem' }}>Textbook:</span>
                  {levelRanges.slice(0, 6).map(renderLevelRangeButton)}
                </div>

                {/* Row 2: Levels 31-50 */}
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {levelRanges.slice(6).map(renderLevelRangeButton)}
                </div>
              </div>







              {/* JLPT Levels Row */}
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#7f8c8d', alignSelf: 'center', marginRight: '0.5rem' }}>JLPT:</span>
                {levelsJLPT.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    style={{
                      padding: '6px 16px',
                      borderRadius: '16px',
                      backgroundColor: levelFilter === lvl ? 'var(--accent-red)' : 'transparent',
                      color: levelFilter === lvl ? '#fff' : 'var(--text-color)',
                      border: levelFilter === lvl ? '1px solid var(--accent-red)' : '1px solid var(--border-color)',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Textbook Length Legend */}
          <div style={{ textAlign: 'left', marginBottom: '1rem', color: '#555', fontSize: '0.95rem' }}>
            <span>🌸Short 100-150字</span>
            <span style={{ margin: '0 1rem' }}>🌸🌸Medium 200-250字</span>
            <span>🌸🌸🌸Long 300-350字</span>
          </div>

          <div className="textbook-grid">
            {visibleTextbooks.map((textbook) => {
              // Calculate index based on non-N5 textbooks only
              let displayIndex: number | undefined;
              if (textbook.level !== 'N5') {
                const nonN5Textbooks = textbooks.filter(t => t.level !== 'N5');
                displayIndex = nonN5Textbooks.findIndex(t => t.id === textbook.id) + 1;
              }

              return (
                <TextbookCard
                  key={textbook.id}
                  textbook={textbook}
                  index={displayIndex}
                />
              );
            })}
          </div>

          {visibleCount < filteredTextbooks.length && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                style={{
                  padding: '10px 30px',
                  borderRadius: '30px',
                  backgroundColor: 'var(--text-main)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                Show More
              </button>
            </div>
          )}

          {/* Floating Action Buttons */}
          <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            zIndex: 1000
          }}>
            {/* Scroll to Bottom */}
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-red)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'transform 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Go to Bottom"
              aria-label="Go to Bottom"
            >
              ↓
            </button>

            {/* Scroll to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-red)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'transform 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Back to Top"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>

          {filteredTextbooks.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)' }}>
              <p>No textbooks found for this level.</p>
            </div>
          )}
        </div>
      )
      }

      {/* Extra Content Placeholder */}
      {
        activeTab === 'extra' && (
          <div className="animate-fade-in" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)' }}>
            <div style={{
              border: '2px dashed var(--border-color)',
              borderRadius: '20px',
              padding: '4rem',
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Content Coming Soon</h3>
              <p>This section will contain new, original Japanese content.</p>
            </div>
          </div>
        )
      }

      {
        activeTab === 'others' && (
          <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>

            {/* Menu View */}
            {otherFeature === 'none' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {/* Daily Discussion Card */}
                <div
                  onClick={() => setOtherFeature('daily_discussion')}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗣️</div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Free Conversation</h3>
                </div>

                {/* Small Talk Cards Menu Item */}
                {/* Small Talk Cards Menu Item (Disabled for now) */}
                <div
                  // onClick={() => setOtherFeature('small_talk')}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'default', // Changed from pointer
                    // transition: 'transform 0.2s, box-shadow 0.2s', // Disabled transition
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    opacity: 0.6 // Optional: Reduced opacity to visualy indicate disabled state
                  }}
                // onMouseEnter={...} // Disabled hover effects
                // onMouseLeave={...}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>Small Talk Cards (Coming Soon)</h3>
                </div>

                {/* Placeholder for future features */}
                <div style={{
                  border: '2px dashed var(--border-color)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.6
                }}>
                  Coming Soon...
                </div>
              </div>
            )}

            {/* Daily Discussion Feature View */}
            {otherFeature === 'daily_discussion' && (
              <div>
                <button
                  onClick={() => setOtherFeature('none')}
                  style={{
                    marginBottom: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  ← Back to Menu
                </button>
                <DailyDiscussion />
              </div>
            )}

            {/* Small Talk Cards Feature View */}
            {otherFeature === 'small_talk' && (
              <div>
                <button
                  onClick={() => setOtherFeature('none')}
                  style={{
                    marginBottom: '1rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  ← Back to Menu
                </button>
                <SmallTalkCards />
              </div>
            )}

          </div>
        )
      }
    </div >
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="container" style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
