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
        let cleaned = html;

        // 1. Extract furigana: Replace <ruby>...<rt>furigana</rt>...</ruby> with "furigana"
        // Regex logic:
        // Match <ruby>
        //   (anything not including <ruby)
        //   <rt>(furigana)</rt>
        //   (anything not including <ruby)
        // </ruby>
        //
        // NOTE: This simple regex works for standard content structure: <ruby>Kanji<rt>Kana</rt></ruby>
        // It might need refinement if nested ruby or multiple rt tags exist, but for this app it should suffice.
        cleaned = cleaned.replace(/<ruby>(?:(?!<rt>).)*<rt>(.*?)<\/rt>(?:(?!<\/ruby>).)*<\/ruby>/g, '$1');

        // 2. Just in case: Remove any orphaned <rt> or <rp> (though step 1 should handle the main ones)
        cleaned = cleaned.replace(/<rt>.*?<\/rt>/g, '');
        cleaned = cleaned.replace(/<rp>.*?<\/rp>/g, '');

        // 3. Replace <br> and <p> with spaces/pauses to ensure natural reading
        cleaned = cleaned.replace(/<br\s*\/?>/gi, ' ');
        cleaned = cleaned.replace(/<\/p>/gi, ' ');

        // 4. Strip remaining HTML tags
        cleaned = cleaned.replace(/<[^>]+>/g, '');

        // 5. Decode entities
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
