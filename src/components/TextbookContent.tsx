'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TextToSpeechButton from './TextToSpeechButton';
import LevelBadge from './LevelBadge';
import { Textbook, Quiz } from '@/data/textbooks/types';



interface TextbookContentProps {
    textbook: Textbook;
    serialNumber?: number;
    prevTextbookId?: string;
    nextTextbookId?: string;
}

const TextbookContent: React.FC<TextbookContentProps> = ({ textbook, serialNumber, prevTextbookId, nextTextbookId }) => {
    const [hideRuby, setHideRuby] = useState(false);
    // State to track selected answers for each quiz: key is quiz index, value is selected option index
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
    // State to track if results should be shown for each quiz
    const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

    // State to track which quiz is currently "active" (floating at bottom)
    const [activeQuizIndex, setActiveQuizIndex] = useState<number | null>(null);

    const [showTranslation, setShowTranslation] = useState(false);
    // State to track translation visibility for each quiz independently
    const [quizTranslations, setQuizTranslations] = useState<{ [key: number]: boolean }>({});

    // Normalize data access
    // Normalize data access
    const displayContent = textbook.textbook_html || '';
    const schemaQuestions = textbook.schema_activation || [];

    const handleOptionChange = (quizIdx: number, optionIdx: number) => {
        setSelectedAnswers(prev => ({ ...prev, [quizIdx]: optionIdx }));
        // Reset result view when option changes
        setShowResults(prev => ({ ...prev, [quizIdx]: false }));
    };

    const handleCheckAnswer = (quizIdx: number) => {
        setShowResults(prev => ({ ...prev, [quizIdx]: true }));
    };

    const toggleQuizTranslation = (quizIdx: number) => {
        setQuizTranslations(prev => ({
            ...prev,
            [quizIdx]: !prev[quizIdx]
        }));
    };

    const handleQuizTitleClick = (index: number, targetId?: string) => {
        if (activeQuizIndex === index) {
            // Toggle off - hide the overlay
            setActiveQuizIndex(null);

            // Scroll back to the quiz card in the list
            setTimeout(() => {
                const quizElement = document.getElementById(`quiz-container-${index}`);
                if (quizElement) {
                    const headerOffset = 180; // Approximate header height + padding
                    const elementPosition = quizElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            return;
        }

        // Toggle on - show the overlay
        setActiveQuizIndex(index);

        // Calculate scroll target
        let targetElement: HTMLElement | null = null;
        if (targetId) {
            targetElement = document.getElementById(targetId);
        }

        const storyUniqueId = 'story-content';
        const storyContent = document.getElementById(storyUniqueId);

        // Define header offset
        const HEADER_OFFSET = 100;
        // Estimated overlay height (or desired bottom spacing)
        // We want to position the element somewhat in the middle of the "safe zone"
        // Safe Zone = Window Height - Header - Overlay (~300px)
        // Let's aim to place the element at roughly 30% - 40% down the screen, rather than right at the top.

        if (targetElement && storyContent) {
            // 1. Get absolute position of the target element
            const elementRect = targetElement.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.scrollY;

            // 2. Calculate visual offset based on viewport
            // If window is 800px high, we might want the element at ~250px from top.
            const desiredScreenY = Math.min(window.innerHeight * 0.3, 250); // Dynamic but capped
            const contentOffset = Math.max(HEADER_OFFSET + 20, desiredScreenY);

            // 3. Calculate desired scroll position
            const targetScrollY = absoluteElementTop - contentOffset;

            // 4. Get absolute position of the story content start
            const storyRect = storyContent.getBoundingClientRect();
            const absoluteStoryTop = storyRect.top + window.scrollY;

            // 5. Calculate minimum scroll position (clamp to start of story)
            // Ensure we at least show the header + some padding before the story starts
            const minScrollY = absoluteStoryTop - HEADER_OFFSET - 20;

            // 6. Conditional Scroll Clamping based on Story Length
            // User Request: Apply "Check Your Understanding header below overlay" rule only for Medium/Long stories.
            // For Short stories, it's physically difficult/impossible due to lack of content, so we skip it.
            let maxScrollY = Infinity;

            // blossomCount is calculated earlier in the component scope (lines ~140-160).
            // We can use it here. 1 = Short, >= 2 = Medium/Long.
            if (blossomCount >= 2) {
                const quizHeader = document.getElementById('quiz-header');
                if (quizHeader) {
                    const headerRect = quizHeader.getBoundingClientRect();
                    const absoluteHeaderTop = headerRect.top + window.scrollY;

                    // We want the Header to be AT LEAST below the overlay top edge.
                    // Overlay is at the bottom, say ~350px-400px height.
                    // Visual goal: Red frame (overlay top) < Header Text Top.
                    // Overlay Top Y in viewport ~= window.innerHeight - OVERLAY_HEIGHT.
                    // Header Y in viewport = absoluteHeaderTop - scrollY.
                    // Constraint: absoluteHeaderTop - scrollY > window.innerHeight - OVERLAY_HEIGHT.
                    // scrollY < absoluteHeaderTop - window.innerHeight + OVERLAY_HEIGHT.

                    const ESTIMATED_OVERLAY_HEIGHT = 350; // Conservative estimate including padding
                    maxScrollY = absoluteHeaderTop - window.innerHeight + ESTIMATED_OVERLAY_HEIGHT;
                }
            }

            // 7. Determine final scroll position
            // We take the desired target, but clamp it by maxScrollY if applicable.
            // However, we MUST respect minScrollY (start of story) to avoid scrolling up too far.
            const calculatedScrollY = Math.min(maxScrollY, targetScrollY);
            const finalScrollY = Math.max(calculatedScrollY, minScrollY);

            setTimeout(() => {
                window.scrollTo({
                    top: finalScrollY,
                    behavior: 'smooth'
                });
            }, 50); // Slight delay to ensure layout stability (optional)

        } else if (storyContent) {
            // Fallback
            const storyRect = storyContent.getBoundingClientRect();
            const absoluteStoryTop = storyRect.top + window.scrollY;
            window.scrollTo({
                top: absoluteStoryTop - HEADER_OFFSET - 20,
                behavior: 'smooth'
            });
        }
    };

    // Calculate Level and Sub-Level from ID (e.g., TEXTBOOK_L01_01)
    let levelDisplay = null;
    let blossomCount = 0;

    const match = textbook.id.match(/TEXTBOOK_L(\d+)_(\d+)/);
    if (match) {
        const levelNum = parseInt(match[1], 10);
        const subLevelNum = parseInt(match[2], 10);

        // Format: "Level 1" -> "Level 1-1"
        levelDisplay = `Level ${levelNum}-${subLevelNum}`;

        // Blossoms & Length mapping:
        // 1 -> Short (1 blossom)
        // 2 -> Medium (2 blossoms)
        // 3 -> Medium (2 blossoms)
        // 4 -> Long (3 blossoms)
        if (subLevelNum === 1) blossomCount = 1;
        else if (subLevelNum === 2 || subLevelNum === 3) blossomCount = 2;
        else if (subLevelNum === 4) blossomCount = 3;
        else blossomCount = Math.min(3, Math.max(1, subLevelNum)); // Fallback default
    } else if (textbook.level) {
        // Fallback if ID doesn't match standard format
        levelDisplay = typeof textbook.level === 'number' ? `Level ${textbook.level}` : textbook.level;
    }

    const closeQuizOverlay = () => {
        setActiveQuizIndex(null);
        // Explicitly do NOT scroll back down. User wants to stay at current reading position.
    };

    // Helper to render a single quiz item content
    const renderQuizContent = (quiz: Quiz, quizIdx: number, isOverlay: boolean = false) => {
        const options = quiz.choices || []; // choices is mandatory in type, but good to be safe if data is inconsistent
        const translationVisible = quizTranslations[quizIdx];

        return (
            <>
                <div style={{ marginBottom: '10px' }}>
                    <p
                        className={`quiz-trigger ${activeQuizIndex === quizIdx ? 'active' : ''}`}
                        onClick={() => handleQuizTitleClick(quizIdx, isOverlay ? undefined : quiz.target_id)}
                        style={{
                            color: isOverlay ? 'inherit' : undefined, // Only override for overlay
                            textDecoration: isOverlay ? 'none' : undefined
                        }}
                        title={isOverlay ? "Click to close" : "Click to locate in text"}
                        dangerouslySetInnerHTML={{ __html: `Q${quizIdx + 1}: ${quiz.question}` }}
                    />
                    {isOverlay && (
                        <button
                            onClick={() => handleQuizTitleClick(quizIdx)} // Close and scroll back to quiz list
                            style={{
                                float: 'right',
                                background: 'none',
                                border: 'none',
                                fontSize: '1.2rem',
                                cursor: 'pointer',
                                color: '#888'
                            }}
                        >
                            ✕
                        </button>
                    )}
                    {quiz.question_translation && (
                        <button
                            onClick={() => toggleQuizTranslation(quizIdx)}
                            style={{
                                fontSize: '0.8rem',
                                padding: '2px 8px',
                                borderRadius: '10px',
                                border: '1px solid #ccc',
                                background: '#f0f0f0',
                                cursor: 'pointer'
                            }}
                        >
                            {translationVisible ? 'Hide EN' : 'Show EN'}
                        </button>
                    )}
                </div>

                {translationVisible && quiz.question_translation && (
                    <div style={{
                        marginBottom: '10px',
                        color: '#666',
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        padding: '5px 10px',
                        background: '#f9f9f9',
                        borderLeft: '3px solid #ccc'
                    }}>
                        {quiz.question_translation}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1rem' }}>
                    {options.map((option: string, optIdx: number) => (
                        <label key={optIdx} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name={`quiz-${quizIdx}${isOverlay ? '-overlay' : ''}`}
                                value={optIdx}
                                checked={selectedAnswers[quizIdx] === optIdx}
                                onChange={() => handleOptionChange(quizIdx, optIdx)}
                                style={{ marginRight: '8px', accentColor: 'var(--accent-red)' }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: option }} />
                        </label>
                    ))}
                </div>

                <button
                    onClick={() => handleCheckAnswer(quizIdx)}
                    style={{
                        marginTop: '0.5rem',
                        marginLeft: '1rem',
                        padding: '0.6rem 1.2rem',
                        backgroundColor: 'var(--accent-red)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        opacity: selectedAnswers[quizIdx] !== undefined ? 1 : 0.5,
                        fontWeight: 'bold',
                        transition: 'all 0.2s'
                    }}
                    disabled={selectedAnswers[quizIdx] === undefined}
                >
                    Check Answer
                </button>

                {showResults[quizIdx] && (
                    <div style={{
                        marginTop: '0.5rem',
                        marginLeft: '1rem',
                        fontWeight: 'bold',
                        color: selectedAnswers[quizIdx] === quiz.answer_index ? '#4CAF50' : '#D91E18'
                    }}>
                        {selectedAnswers[quizIdx] === quiz.answer_index
                            ? <span dangerouslySetInnerHTML={{ __html: '<ruby>正解<rt>せいかい</rt></ruby>です！ (Correct!)' }} />
                            : <span dangerouslySetInnerHTML={{ __html: '<ruby>不正解<rt>ふせいかい</rt></ruby>です。 (Incorrect.)' }} />}
                    </div>
                )}
            </>
        );
    };

    return (
        <div className={`story-container animate-fade-in`} style={{ marginBottom: activeQuizIndex !== null ? '60vh' : '0' }}>
            {/* Level and Blossom Indicator using existing LevelBadge style logic */}
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {levelDisplay && (
                    <LevelBadge level={levelDisplay} />
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {Array.from({ length: blossomCount }).map((_, i) => (
                        <span key={i} style={{ fontSize: '1.2rem', marginLeft: '2px' }}>🌸</span>
                    ))}
                    <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '8px', fontWeight: 'normal' }}>
                        {blossomCount === 1 && '(short)'}
                        {blossomCount === 2 && '(medium)'}
                        {blossomCount === 3 && '(long)'}
                    </span>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--accent-red)', paddingBottom: '10px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Serial Number styled like TextbookCard watermark but inline */}
                    {serialNumber !== undefined && (
                        <div style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '3rem',
                            fontWeight: 700,
                            color: 'var(--accent-gray)',
                            opacity: 0.2, // Slightly more visible than watermark
                            lineHeight: 1,
                            userSelect: 'none'
                        }}>
                            {String(serialNumber).padStart(2, '0')}
                        </div>
                    )}
                    <h1 className="story-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: textbook.title }} />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {prevTextbookId ? (
                        <Link href={`/textbooks/${prevTextbookId}`} className="nav-icon-btn" aria-label="Previous Textbook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </Link>
                    ) : (
                        <span className="nav-icon-btn disabled">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </span>
                    )}

                    {nextTextbookId ? (
                        <Link href={`/textbooks/${nextTextbookId}`} className="nav-icon-btn" aria-label="Next Textbook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    ) : (
                        <span className="nav-icon-btn disabled">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    )}
                </div>
            </div>

            {/* Schema Activation Section */}
            {schemaQuestions.length > 0 && (
                <div className="schema-box">
                    <strong>Topic Question</strong><br />
                    {schemaQuestions.map((q, idx) => (
                        <div key={idx} dangerouslySetInnerHTML={{ __html: `${idx + 1}. ${q}` }} />
                    ))}
                </div>
            )}

            {/* Controls */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <button
                    className="btn-toggle"
                    onClick={() => setHideRuby(!hideRuby)}
                >
                    ふりがな ON/OFF
                </button>
                <TextToSpeechButton text={displayContent} label="🔊 Play" className="control-btn" audioSrc={textbook.audio_file} />
            </div>

            {/* Main Textbook Content */}
            <div
                id="story-content"
                className={hideRuby ? 'hide-ruby' : ''}
                style={{
                    fontSize: '1.5rem',
                    lineHeight: '3.0',
                    textAlign: 'justify',
                    textJustify: 'inter-ideograph',
                    letterSpacing: '0.03em'
                } as unknown as React.CSSProperties}
                dangerouslySetInnerHTML={{ __html: displayContent }}
            />

            {/* Translation (Optional) - Hidden by default */}
            {textbook.translation && (
                <div className="translation-section">
                    <button
                        className="btn-toggle-translation"
                        onClick={() => setShowTranslation(!showTranslation)}
                    >
                        {showTranslation ? 'Hide English Translation / 英語訳を隠す' : 'Show English Translation / 英語訳を表示'}
                    </button>

                    {showTranslation && (
                        <div className="translation-content animate-fade-in" dangerouslySetInnerHTML={{ __html: textbook.translation }} />
                    )}
                </div>
            )}

            {/* Quizzes Section */}
            {textbook.quizzes && textbook.quizzes.length > 0 && (
                <div className="quiz-section">
                    <h3 id="quiz-header">Check Your Understanding</h3>

                    {/* Static List of Quizzes */}
                    {textbook.quizzes.map((quiz, quizIdx) => {
                        const defaultStyle: React.CSSProperties = {
                            marginBottom: '2rem',
                            borderBottom: quizIdx < (textbook.quizzes?.length || 0) - 1 ? '1px dashed #ccc' : 'none',
                            paddingBottom: '1rem',
                            opacity: activeQuizIndex !== null ? 0.4 : 1, // Dim if ANY quiz is active
                            pointerEvents: activeQuizIndex !== null ? 'none' : 'auto', // Disable interactions if ANY quiz is active
                            transition: 'opacity 0.2s'
                        };

                        return (
                            <div key={quizIdx} id={`quiz-container-${quizIdx}`} style={defaultStyle}>
                                {renderQuizContent(quiz, quizIdx, false)}
                            </div>
                        );
                    })}

                    {/* Active Quiz Backdrop - Click to Close from Anywhere */}
                    {activeQuizIndex !== null && (
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                zIndex: 9998,
                                background: 'transparent', // Looks like normal screen click
                                cursor: 'default'
                            }}
                            onClick={closeQuizOverlay}
                            aria-hidden="true"
                        />
                    )}

                    {/* Active Quiz Overlay */}
                    {activeQuizIndex !== null && textbook.quizzes[activeQuizIndex] && (
                        <div style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: '100vw',
                            background: 'rgba(255, 255, 255, 0.95)',
                            padding: '20px 40px',
                            boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
                            zIndex: 9999,
                            borderTop: '4px solid var(--accent-red)',
                            maxHeight: '60vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease-out'
                        }}>
                            {/* Re-render the ACTIVE quiz content here used the shared helper */}
                            {renderQuizContent(textbook.quizzes[activeQuizIndex], activeQuizIndex, true)}
                        </div>
                    )}
                </div>
            )}

            {/* Bottom Navigation */}
            <div className="bottom-nav-container">
                <div className="nav-buttons-row" style={{ justifyContent: 'flex-end', gap: '10px' }}>
                    {/* Previous Button */}
                    {prevTextbookId ? (
                        <Link href={`/textbooks/${prevTextbookId}`} className="nav-icon-btn" aria-label="Previous Textbook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </Link>
                    ) : (
                        <div className="nav-icon-btn disabled">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </div>
                    )}

                    {/* Next Button */}
                    {nextTextbookId ? (
                        <Link href={`/textbooks/${nextTextbookId}`} className="nav-icon-btn" aria-label="Next Textbook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </Link>
                    ) : (
                        <div className="nav-icon-btn disabled">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    )}
                </div>

                <div className="back-link-row">
                    <Link href="/" style={{ color: 'var(--accent-red)', textDecoration: 'underline', fontWeight: 'bold' }}>
                        ← Back to Lesson List
                    </Link>
                </div>
            </div>

            <style jsx>{`
        .story-container { 
          background: white; 
          padding: 40px; 
          border-radius: 20px; 
          box-shadow: 0 4px 20px rgba(0,0,0,0.05); 
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          transition: margin-bottom 0.3s ease;
        }
        .story-title {
          color: var(--text-color); 
        }
        .schema-box { 
          background: #FFF9F0; 
          padding: 20px; 
          border-left: 5px solid var(--accent-yellow); 
          margin-bottom: 30px; 
          border-radius: 8px;
          color: var(--text-color);
          font-size: 1.5rem; /* Match main content font size */
          line-height: 2.0;
        }
        .btn-toggle, :global(.control-btn) { 
          background: rgba(89, 67, 53, 0.1); 
          color: var(--text-color); 
          border: 1px solid transparent; 
          padding: 8px 16px; 
          border-radius: 20px; 
          cursor: pointer; 
          
          transition: all 0.2s;
          font-weight: 600;
          height: 40px; /* Fixed height for alignment */
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          margin: 0;
        }
        .btn-toggle:hover, :global(.control-btn:hover) {
          background: rgba(89, 67, 53, 0.2);
        }
        .translation-section {
            margin-top: 30px;
            border-top: 1px dashed var(--border-color);
            padding-top: 20px;
        }
        .btn-toggle-translation {
            background: transparent;
            border: 1px solid var(--accent-gray);
            color: var(--text-light);
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.2s;
            display: block;
            margin-bottom: 15px;
        }
        /* Scrollbar mostly hidden but functional */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        .btn-toggle-translation {
            background: #fff;
            border: 1px solid var(--border-color);
            color: var(--text-light);
            padding: 10px 20px;
            border-radius: 30px;
            cursor: pointer;
            margin-bottom: 20px;
            font-size: 0.9rem;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .btn-toggle-translation:hover {
            background: #f5f5f5;
            color: var(--text-color);
        }
        .translation-content {
            color: var(--text-light);
            line-height: 1.8;
            font-size: 1rem;
            background: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
        }
        .quiz-section { 
          margin-top: 40px; 
          background: #fafafa; 
          padding: 30px; 
          border-radius: 16px; 
          border: 1px solid var(--border-color);
          font-size: 1.5rem; /* Match main content font size */
          line-height: 2.0; /* Adjusted line height for readability */
        }
        
        /* Make ruby text bold and larger */
        :global(rt) {
          font-weight: bold !important;
          opacity: 0.9;
          font-size: 0.6em; /* Ensure ruby isn't too small */
        }
        
        :global(ruby) {
            ruby-align: center;
        }

        /* Top Navigation - Icon only (Round) */
        :global(.nav-icon-btn) {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          transition: all 0.2s ease;
          border: 1px solid #ddd;
          text-decoration: none; /* Ensure no underline */
        }
        :global(.nav-icon-btn:hover:not(.disabled)) {
          background: var(--accent-red);
          color: white;
          border-color: var(--accent-red);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        :global(.nav-icon-btn.disabled) {
          opacity: 0.3;
          cursor: default;
          background: #eee;
        }

        /* Bottom Nav - Split Layout */
        .bottom-nav-container {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .nav-buttons-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .back-link-row {
            text-align: center;
        }

        /* Nav Round Button (Bottom) */
        :global(.nav-round-btn) {
          width: 50px;
          height: 50px;
          min-width: 50px; /* Prevent shrinking */
          min-height: 50px;
          border-radius: 50%;
          background: #f9f9f9;
          border: 1px solid #e0e0e0;
          
          /* Flex Centering */
          display: flex;
          align-items: center;
          justify-content: center;
          
          color: var(--text-color);
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          box-sizing: border-box; /* Include border in size */
          line-height: 0; /* Fix vertical alignment issues */
          text-decoration: none; /* Ensure no underline */
        }
        :global(.nav-round-btn:hover:not(.disabled)) {
          background: #fff;
          border-color: #d0d0d0;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        /* Disabled State */
        :global(.nav-round-btn.disabled) {
          opacity: 0.5;
          cursor: default;
          background: #f0f0f0; /* Clearly grey */
          box-shadow: none;
          color: #aaa;
        }

        #story-content :global(p) {
            text-align: justify;
            text-justify: inter-ideograph;
            margin-bottom: 1.5em;
            line-height: inherit; /* Inherit from parent */
            letter-spacing: inherit;
        }

        #story-content :global(span[id]) {
            scroll-margin-top: 150px; /* Ensure target is valid even with sticky headers or top spacing */
        }

        
        /* New Style for Quiz Triggers */
        /* New Style for Quiz Triggers */
        /* New Style for Quiz Triggers */
        /* New Style for Quiz Triggers - Global to bypass styled-jsx helper function scoping issues */
        :global(.quiz-trigger) {
            font-weight: 700 !important; /* Force bold */
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
            padding: 6px 12px; /* Slightly larger clickable area */
            border-radius: 6px;
            transition: all 0.2s ease;
            margin-left: -12px; /* Offset alignment */
            color: var(--text-color); /* Default color */
            text-decoration: underline;
            text-underline-offset: 4px;
            border: 1px solid transparent; 
        }
        :global(.quiz-trigger:hover) {
            background-color: rgba(217, 30, 24, 0.1);
        }
        :global(.quiz-trigger.active) {
            color: var(--accent-red) !important;
            text-decoration: underline;
            text-underline-offset: 4px;
            background-color: rgba(217, 30, 24, 0.05);
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default TextbookContent;
