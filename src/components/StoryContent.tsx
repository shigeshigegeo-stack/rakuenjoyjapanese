'use client';

import React, { useState } from 'react';
import TextToSpeechButton from './TextToSpeechButton';

// Define the comprehensive Story interface matching the new data structure
interface Story {
    id: string;
    title: string;
    level: string | number; // Accept both for flexibility
    lesson?: string;
    excerpt?: string;
    schema_activation?: string[]; // New field name
    schema_questions?: string[];  // Old field name (kept for compatibility if needed)
    story_html?: string;          // New field name
    content_html?: string;        // Old field name
    content?: string;
    translation?: string;
    quizzes?: {
        question: string;
        choices?: string[];       // New field name
        options?: string[];       // Old field name
        answer_index: number;
        question_translation?: string; // New field for English translation
    }[];
    discussion_topics?: string[]; // Deprecated
}

interface StoryContentProps {
    story: Story;
    serialNumber?: number;
    prevStoryId?: string;
    nextStoryId?: string;
}

const StoryContent: React.FC<StoryContentProps> = ({ story, serialNumber, prevStoryId, nextStoryId }) => {
    const [hideRuby, setHideRuby] = useState(false);
    // State to track selected answers for each quiz: key is quiz index, value is selected option index
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
    // State to track if results should be shown for each quiz
    const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

    const [showTranslation, setShowTranslation] = useState(false);

    // Normalize data access
    const displayContent = story.story_html || story.content_html || story.content || '';
    const schemaQuestions = story.schema_activation || story.schema_questions || [];

    const handleOptionChange = (quizIdx: number, optionIdx: number) => {
        setSelectedAnswers(prev => ({ ...prev, [quizIdx]: optionIdx }));
        // Reset result view when option changes
        setShowResults(prev => ({ ...prev, [quizIdx]: false }));
    };

    const handleCheckAnswer = (quizIdx: number) => {
        setShowResults(prev => ({ ...prev, [quizIdx]: true }));
    };

    return (
        <div className={`story-container animate-fade-in`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--accent-red)', paddingBottom: '10px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Serial Number styled like StoryCard watermark but inline */}
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
                    <h1 className="story-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: story.title }} />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {prevStoryId ? (
                        <a href={`/stories/${prevStoryId}`} className="nav-btn" aria-label="Previous Story">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </a>
                    ) : (
                        <span className="nav-btn disabled">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </span>
                    )}

                    {nextStoryId ? (
                        <a href={`/stories/${nextStoryId}`} className="nav-btn" aria-label="Next Story">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </a>
                    ) : (
                        <span className="nav-btn disabled">
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
                    <strong>Reading Goal:</strong><br />
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
                <TextToSpeechButton text={displayContent} label="🔊 音声を聞く" className="control-btn" />
            </div>

            {/* Main Story Content */}
            <div
                id="story-content"
                className={hideRuby ? 'hide-ruby' : ''}
                style={{ fontSize: '1.5rem', lineHeight: '2.8' }}
                dangerouslySetInnerHTML={{ __html: displayContent }}
            />

            {/* Translation (Optional) - Hidden by default */}
            {story.translation && (
                <div className="translation-section">
                    <button
                        className="btn-toggle-translation"
                        onClick={() => setShowTranslation(!showTranslation)}
                    >
                        {showTranslation ? 'Hide English Translation / 英語訳を隠す' : 'Show English Translation / 英語訳を表示'}
                    </button>

                    {showTranslation && (
                        <div className="translation-content animate-fade-in" dangerouslySetInnerHTML={{ __html: story.translation }} />
                    )}
                </div>
            )}

            {/* Quizzes Section */}
            {story.quizzes && story.quizzes.length > 0 && (
                <div className="quiz-section">
                    <h3>Quizzes</h3>

                    {story.quizzes.map((quiz, quizIdx) => {
                        const options = quiz.choices || quiz.options || [];
                        const [showTranslation, setShowTranslation] = useState(false);

                        return (
                            <div key={quizIdx} style={{ marginBottom: '2rem', borderBottom: quizIdx < (story.quizzes?.length || 0) - 1 ? '1px dashed #ccc' : 'none', paddingBottom: '1rem' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <p style={{ fontWeight: 'bold', display: 'inline-block', marginRight: '10px' }} dangerouslySetInnerHTML={{ __html: `Q${quizIdx + 1}: ${quiz.question}` }} />
                                    {quiz.question_translation && (
                                        <button
                                            onClick={() => setShowTranslation(!showTranslation)}
                                            style={{
                                                fontSize: '0.8rem',
                                                padding: '2px 8px',
                                                borderRadius: '10px',
                                                border: '1px solid #ccc',
                                                background: '#f0f0f0',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {showTranslation ? 'Hide EN' : 'Show EN'}
                                        </button>
                                    )}
                                </div>

                                {showTranslation && quiz.question_translation && (
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
                                    {options.map((option, optIdx) => (
                                        <label key={optIdx} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                            <input
                                                type="radio"
                                                name={`quiz-${quizIdx}`}
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
                                            ? <span dangerouslySetInnerHTML={{ __html: '正解です！ (Correct!)' }} />
                                            : <span dangerouslySetInnerHTML={{ __html: `残念、不正解です。 (Incorrect. Answer: ${options[quiz.answer_index]})` }} />}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--accent-red)', textDecoration: 'underline', fontWeight: 'bold' }}>
                    ← Back to Lesson List
                </a>
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
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          font-weight: bold;
          transition: all 0.2s ease;
          border: 1px solid #ddd;
        }
        .nav-btn:hover:not(.disabled) {
          background: var(--accent-red);
          color: white;
          border-color: var(--accent-red);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .nav-btn.disabled {
          opacity: 0.3;
          cursor: default;
          background: #eee;
        }

      `}</style>
        </div>
    );
};

export default StoryContent;
