'use client';

import React, { useState, useEffect, Suspense } from 'react';
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

  const filteredTextbooks = textbooks.filter(textbook => {
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

  // Filter Groups
  const levelsTextbook = [
    'Level 1-3', 'Level 4-6', 'Level 7-9', 'Level 10-12',
    'Level 13-15', 'Level 16-18', 'Level 19-21', 'Level 22-24',
    'Level 25-27', 'Level 28-30'
  ];
  const levelsJLPT = ['N5', 'N4', 'N3', 'N2', 'N1'];

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
          Others
        </button>
      </div>

      {/* Textbooks Content Area (Formerly Stories) */}
      {activeTab === 'textbooks' && (
        <div className="animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 style={{ marginBottom: '1rem', color: '#2c3e50', fontFamily: 'var(--font-heading)' }}>Select a Textbook</h2>

            {/* Filter Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>

              {/* Reset / All */}
              <button
                onClick={() => setLevelFilter('All')}
                style={{
                  padding: '6px 20px',
                  borderRadius: '20px',
                  backgroundColor: levelFilter === 'All' ? 'var(--text-main)' : '#fff',
                  color: levelFilter === 'All' ? '#fff' : 'var(--text-color)',
                  border: '1px solid var(--border-color)',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Show All
              </button>

              {/* Textbook Levels Row */}
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#7f8c8d', alignSelf: 'center', marginRight: '0.5rem' }}>Textbook:</span>
                {levelsTextbook.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    style={{
                      padding: '6px 16px',
                      borderRadius: '16px',
                      backgroundColor: levelFilter === lvl ? 'var(--accent-yellow)' : 'transparent',
                      color: levelFilter === lvl ? 'var(--text-main)' : 'var(--text-color)',
                      border: levelFilter === lvl ? '1px solid var(--accent-yellow)' : '1px solid var(--border-color)',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {lvl}
                  </button>
                ))}
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

          {/* Story Length Legend */}
          <div style={{ textAlign: 'left', marginBottom: '1rem', color: '#555', fontSize: '0.95rem' }}>
            <span>🌸Short 100-150字</span>
            <span style={{ margin: '0 1rem' }}>🌸🌸Medium 200-250字</span>
            <span>🌸🌸🌸Long 300-350字</span>
          </div>

          <div className="textbook-grid">
            {filteredTextbooks.map((textbook) => {
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
      )}

      {/* Stories Placeholder */}
      {activeTab === 'extra' && (
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
      )}

      {activeTab === 'others' && (
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
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>今日のディスカッション</h3>
                <p style={{ color: 'var(--text-light)' }}>Daily Discussion</p>
              </div>

              {/* Small Talk Cards Menu Item */}
              <div
                onClick={() => setOtherFeature('small_talk')}
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
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>スモールトーク・カード</h3>
                <p style={{ color: 'var(--text-light)' }}>Small Talk Cards</p>
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
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="container" style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
