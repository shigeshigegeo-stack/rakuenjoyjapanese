'use client';

import React, { useState, useEffect } from 'react';
import styles from './TodaysPhrase.module.css';
import phrasesData from '@/data/phrases.json';

type Phrase = {
    id: number;
    phrase_jp: string;
    phrase_en: string;
    explanation: string;
    examples?: {
        type: string;
        ja: string;
        en: string;
    }[];
};

const phrases: Phrase[] = phrasesData as Phrase[];

const TodaysPhrase: React.FC = () => {
    const [currentPhrase, setCurrentPhrase] = useState<Phrase | null>(null);

    useEffect(() => {
        // Calculate day of year to rotate phrases daily
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Select phrase based on day
        const index = dayOfYear % phrases.length;
        // eslint-disable-next-line
        setCurrentPhrase(phrases[index]);
    }, []);

    const handleShuffle = () => {
        if (phrases.length === 0) return;
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setCurrentPhrase(phrases[randomIndex]);
    };

    if (!currentPhrase) return null;

    return (
        <section className={styles.container}>
            <button
                className={styles.shuffleTopRight}
                onClick={handleShuffle}
                title="Next Phrase"
            >
                🔀
            </button>

            <div className={styles.phraseContainer}>
                <span className={styles.label}>Today&apos;s Phrase</span>
                <div
                    className={styles.phraseJp}
                    dangerouslySetInnerHTML={{ __html: currentPhrase.phrase_jp }}
                />
            </div>

            <div className={styles.revealContent}>
                <span className={styles.revealLabel}>English Translation</span>
                <p className={styles.translation}>{currentPhrase.phrase_en}</p>

                <div style={{ margin: '1.5rem 0' }}>
                    <span className={styles.revealLabel}>Explanation</span>
                    <p className={styles.explanation}>{currentPhrase.explanation}</p>
                </div>

                {currentPhrase.examples && currentPhrase.examples.length > 0 && (
                    <div className={styles.examplesContainer}>
                        <h4 className={styles.sectionTitle}>Conversation Examples</h4>
                        <div className={styles.exampleGrid}>
                            {currentPhrase.examples.map((ex, i) => (
                                <div key={i} className={styles.exampleCard}>
                                    <span className={`${styles.exampleType} ${ex.type === 'Casual' ? styles.typeCasual : styles.typePolite}`}>
                                        {ex.type}
                                    </span>
                                    <p
                                        className={styles.jaText}
                                        dangerouslySetInnerHTML={{ __html: ex.ja }}
                                    />
                                    <p className={styles.enText}>{ex.en}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TodaysPhrase;
