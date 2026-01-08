'use client';

import React, { useState, useEffect } from 'react';

interface TextToSpeechButtonProps {
    text: string; // Can vary, often contains HTML like <ruby>
    label?: string;
    className?: string;
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text, label = '🔊 Listen', className = '' }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Stop audio when component unmounts
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const cleanText = (html: string) => {
        // 1. Remove <rt>...</rt> tags entirely (reading info)
        // <rt>き</rt> -> ""
        let cleaned = html.replace(/<rt>.*?<\/rt>/g, '');

        // 2. Replace <br> and <p> with spaces/pauses to ensure natural reading
        cleaned = cleaned.replace(/<br\s*\/?>/gi, ' ');
        cleaned = cleaned.replace(/<\/p>/gi, ' ');

        // 3. Strip remaining HTML tags (<ruby>, <p>, etc)
        cleaned = cleaned.replace(/<[^>]+>/g, '');

        // 4. Decode entities if necessary (basic ones)
        cleaned = cleaned.replace(/&nbsp;/g, ' ');

        return cleaned.trim();
    };

    const handleSpeech = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            return;
        }

        // Stop issues with double clicking or overlapping
        window.speechSynthesis.cancel();

        const plainText = cleanText(text);
        if (!plainText) return;

        const utterance = new SpeechSynthesisUtterance(plainText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85; // Slower speed for learners

        utterance.onstart = () => setIsPlaying(true);
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
    };

    return (
        <button
            onClick={handleSpeech}
            className={className}
            style={{
                padding: '6px 12px',
                borderRadius: '20px',
                backgroundColor: isPlaying ? '#ffcdd2' : '#e0f7fa',
                color: isPlaying ? '#b71c1c' : '#006064',
                border: isPlaying ? '1px solid #ef9a9a' : '1px solid #b2ebf2',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s',
                ... (className ? {} : { marginLeft: '10px' }) // Default margin if no class
            }}
        >
            {isPlaying ? '⏹ Stop' : label}
        </button>
    );
};

export default TextToSpeechButton;
