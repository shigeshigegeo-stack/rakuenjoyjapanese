'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TextToSpeechButtonProps {
    text: string; // Can vary, often contains HTML like <ruby>
    label?: string;
    className?: string;
    audioSrc?: string;
}

const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text, label = '🔊 Listen', className = '', audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [showControls, setShowControls] = useState(false);

    // Use useRef for the Audio instance
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Helper: Clean text logic for TTS
    const cleanText = (html: string) => {
        let cleaned = html;
        // 1. Extract furigana: Replace <ruby>...<rt>furigana</rt>...</ruby> with "furigana"
        cleaned = cleaned.replace(/<ruby>(?:(?!<rt>).)*<rt>(.*?)<\/rt>(?:(?!<\/ruby>).)*<\/ruby>/g, '$1');
        // 2. Remove orphaned rt/rp
        cleaned = cleaned.replace(/<rt>.*?<\/rt>/g, '');
        cleaned = cleaned.replace(/<rp>.*?<\/rp>/g, '');
        // 3. Replace breaks with spaces
        cleaned = cleaned.replace(/<br\s*\/?>/gi, ' ');
        cleaned = cleaned.replace(/<\/p>/gi, ' ');
        // 4. Strip tags
        cleaned = cleaned.replace(/<[^>]+>/g, '');
        // 5. Decode entities
        cleaned = cleaned.replace(/&nbsp;/g, ' ');
        return cleaned.trim();
    };

    // Initialize Audio if audioSrc is provided
    useEffect(() => {
        if (!audioSrc) return;

        const audio = new Audio(audioSrc);
        audioRef.current = audio;

        // Sync duration and time
        const onTimeUpdate = () => setCurrentTime(audio.currentTime);
        const onLoadedMetadata = () => {
            // Sometimes duration is Infinity if not fully loaded, need to handle
            if (isFinite(audio.duration)) {
                setDuration(audio.duration);
            }
        };
        const onDurationChange = () => {
            if (isFinite(audio.duration)) {
                setDuration(audio.duration);
            }
        };
        const onEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', onTimeUpdate);
        audio.addEventListener('loadedmetadata', onLoadedMetadata);
        audio.addEventListener('durationchange', onDurationChange);
        audio.addEventListener('ended', onEnded);

        // Preload metadata to get duration
        audio.preload = 'metadata';

        return () => {
            audio.pause();
            audio.removeEventListener('timeupdate', onTimeUpdate);
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            audio.removeEventListener('durationchange', onDurationChange);
            audio.removeEventListener('ended', onEnded);
            audioRef.current = null;
        };
    }, [audioSrc]);

    // Handle Unmount for TTS cleanup
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    // Effect to update playback rate dynamically
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = playbackRate;
        }
    }, [playbackRate]);

    const handlePlayPause = () => {
        if (audioSrc && audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
                setShowControls(true); // Reveal controls on first play
            }
            setIsPlaying(!isPlaying);
        } else {
            // TTS Fallback
            handleTTS();
        }
    };

    const handleTTS = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            return;
        }

        const plainText = cleanText(text);
        if (!plainText) return;

        const utterance = new SpeechSynthesisUtterance(plainText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85; // TTS default (fixed for now as Web Speech API rate varies by browser)

        utterance.onstart = () => {
            setIsPlaying(true);
            setShowControls(true); // Show basic controls (stop button)
        };
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (t: number) => {
        if (!isFinite(t) || isNaN(t)) return '0:00';
        const minutes = Math.floor(t / 60);
        const seconds = Math.floor(t % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Handle Stop (Reset to initial state)
    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
        }
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setShowControls(false); // Hide controls to return to the initial button
    };

    // If not showing controls (initial state), show the simple button
    if (!showControls && !isPlaying) {
        return (
            <button
                onClick={handlePlayPause}
                className={className}
                style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    backgroundColor: '#e0f7fa',
                    color: '#006064',
                    border: '1px solid #b2ebf2',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s',
                    marginLeft: '10px'
                }}
            >
                {label}
            </button>
        );
    }

    // Expanded Controls UI
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f1f8e9',
            padding: '4px 12px',
            borderRadius: '25px',
            border: '1px solid #c5e1a5',
            marginLeft: '10px',
            flexWrap: 'wrap',
            maxWidth: '100%', // Responsive safety
            height: '36px', // Enforce container height
            boxSizing: 'border-box'
        }}>
            {/* Play/Pause Button */}
            {/* Play/Pause Button */}
            <button
                onClick={handlePlayPause}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#33691e',
                    padding: 0,
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                title={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>

            {/* Stop Button (Square) */}
            <button
                onClick={handleStop}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#d32f2f',
                    padding: 0,
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                title="Stop and Close"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="5" y="5" width="14" height="14" />
                </svg>
            </button>

            {/* Audio File Controls (Seeker & Timer) */}
            {audioSrc ? (
                <>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#558b2f', minWidth: '35px' }}>
                        {formatTime(currentTime)}
                    </span>

                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleSeek}
                        style={{
                            width: '100px',
                            cursor: 'pointer',
                            accentColor: '#558b2f'
                        }}
                    />

                    <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: '#558b2f', minWidth: '35px' }}>
                        {formatTime(duration)}
                    </span>

                    {/* Speed Selector */}
                    <div style={{ marginLeft: '5px' }}>
                        <select
                            value={playbackRate}
                            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                            style={{
                                fontSize: '0.75rem',
                                padding: '2px 4px',
                                borderRadius: '4px',
                                border: '1px solid #aed581',
                                backgroundColor: 'white',
                                color: '#33691e',
                                cursor: 'pointer',
                                outline: 'none',
                                height: '22px',
                                transform: 'translateY(-2px)' // Visually center in the container
                            }}
                        >
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1">1.0x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                        </select>
                    </div>
                </>
            ) : (
                <span style={{ fontSize: '0.85rem', color: '#558b2f' }}>Reading...</span>
            )}
        </div>
    );
};

export default TextToSpeechButton;
