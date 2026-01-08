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
    }[];
}

const StoryContent: React.FC<{ story: Story }> = ({ story }) => {
    const [hideRuby, setHideRuby] = useState(false);
    // State to track selected answers for each quiz: key is quiz index, value is selected option index
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
    // State to track if results should be shown for each quiz
    const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--accent-red)', paddingBottom: '10px', marginBottom: '20px' }}>
                <h1 className="story-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>{story.title}</h1>
            </div>

            {/* Schema Activation Section */}
            {schemaQuestions.length > 0 && (
                <div className="schema-box">
                    <strong>Reading Goal:</strong><br />
                    {schemaQuestions.map((q, idx) => (
                        <div key={idx}>{idx + 1}. {q}</div>
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

            {/* Translation (Optional) */}
            {story.translation && (
                <div className="translation">
                    <div dangerouslySetInnerHTML={{ __html: story.translation }} />
                </div>
            )}

            {/* Quizzes Section */}
            {story.quizzes && story.quizzes.length > 0 && (
                <div className="quiz-section">
                    <h3>Quizzes</h3>

                    {story.quizzes.map((quiz, quizIdx) => {
                        const options = quiz.choices || quiz.options || [];
                        return (
                            <div key={quizIdx} style={{ marginBottom: '2rem', borderBottom: quizIdx < (story.quizzes?.length || 0) - 1 ? '1px dashed #ccc' : 'none', paddingBottom: '1rem' }}>
                                <p style={{ fontWeight: 'bold' }}>Q{quizIdx + 1}: {quiz.question}</p>
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
                                            {option}
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
                                            ? '正解です！ (Correct!)'
                                            : `残念、不正解です。 (Incorrect. Answer: ${options[quiz.answer_index]})`}
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
        .translation { 
          color: var(--text-light); 
          font-style: italic; 
          margin-top: 25px; 
          font-size: 1rem; 
          border-top: 1px dashed var(--border-color); 
          padding-top: 15px; 
        }
        .quiz-section { 
          margin-top: 40px; 
          background: #fafafa; 
          padding: 30px; 
          border-radius: 16px; 
          border: 1px solid var(--border-color);
        }
      `}</style>
        </div>
    );
};

export default StoryContent;
