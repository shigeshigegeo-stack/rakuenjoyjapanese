'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import storiesFromData from '@/data/stories.json';
import StoryCard from '@/components/StoryCard';
import DailyDiscussion from '@/components/DailyDiscussion';

// Updated type definition to match actual data
type Story = {
  id: string;
  title: string;
  level: number | string;
  lesson?: string;
  excerpt?: string;
  story_html?: string;
  content?: string;
  content_html?: string;
  translation?: string;
};

const stories: Story[] = storiesFromData as unknown as Story[];

function HomeContent() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'stories' | 'other'>('stories');
  const [otherFeature, setOtherFeature] = useState<'none' | 'daily_discussion'>('none');

  // Filter State
  const [levelFilter, setLevelFilter] = useState<string>('All');

  const router = useRouter();
  const searchParams = useSearchParams();

  // Reset Logic
  useEffect(() => {
    if (searchParams.get('reset')) {
      setActiveTab('stories');
      setLevelFilter('All');
      setOtherFeature('none');
      // Clean up URL
      router.replace('/');
    }
  }, [searchParams, router]);

  const filteredStories = stories.filter(story => {
    if (levelFilter === 'All') return true;

    // Handle JLPT levels (e.g., N5) - exact match
    if (levelFilter.startsWith('N')) {
      return story.level === levelFilter;
    }

    // Handle Range Filters (e.g. "Level 1-3")
    if (levelFilter.includes('-')) {
      const match = levelFilter.match(/Level (\d+)-(\d+)/);
      if (match) {
        const min = parseInt(match[1], 10);
        const max = parseInt(match[2], 10);

        // Extract numeric level from story
        let storyLvl = 0;
        if (typeof story.level === 'number') {
          storyLvl = story.level;
        } else if (typeof story.level === 'string' && story.level.startsWith('Level')) {
          const m = story.level.match(/\d+/);
          storyLvl = m ? parseInt(m[0], 10) : 0;
        }

        return storyLvl >= min && storyLvl <= max;
      }
    }

    // Fallback for single levels (though we are switching to ranges mostly)
    // Or if story level format doesn't match expectations
    let storyLevelStr = '';
    if (typeof story.level === 'number') {
      storyLevelStr = `Level ${story.level}`;
    } else {
      if (story.level.startsWith('Level') || story.level.startsWith('N')) {
        storyLevelStr = story.level;
      } else {
        storyLevelStr = `Level ${story.level}`;
      }
    }

    return storyLevelStr === levelFilter;
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
    <div className="container">
      {/* Top Navigation Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
        <button
          onClick={() => { setActiveTab('stories'); setOtherFeature('none'); }}
          style={{
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: activeTab === 'stories' ? 'var(--accent-red)' : 'transparent',
            color: activeTab === 'stories' ? 'white' : 'var(--text-color)',
            border: activeTab === 'stories' ? '2px solid var(--accent-red)' : '2px solid var(--border-color)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Stories
        </button>
        <button
          onClick={() => setActiveTab('other')}
          style={{
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: activeTab === 'other' ? 'var(--accent-red)' : 'transparent',
            color: activeTab === 'other' ? 'white' : 'var(--text-color)',
            border: activeTab === 'other' ? '2px solid var(--accent-red)' : '2px solid var(--border-color)',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Other
        </button>
      </div>

      {/* Content Area */}
      {activeTab === 'stories' && (
        <div className="animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#2c3e50', fontFamily: 'var(--font-heading)' }}>Select a Story</h2>

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

          <div className="story-grid">
            {filteredStories.map((story) => {
              // Calculate index based on non-N5 stories only
              let displayIndex: number | undefined;
              if (story.level !== 'N5') {
                const nonN5Stories = stories.filter(s => s.level !== 'N5');
                displayIndex = nonN5Stories.findIndex(s => s.id === story.id) + 1;
              }

              return (
                <StoryCard
                  key={story.id}
                  story={story}
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

          {filteredStories.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)' }}>
              <p>No stories found for this level.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'other' && (
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
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>本日のディスカッション</h3>
                <p style={{ color: 'var(--text-light)' }}>Daily Discussion</p>
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
