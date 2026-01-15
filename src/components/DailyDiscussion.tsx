'use client';

import React, { useState, useEffect } from 'react';
import styles from './DailyDiscussion.module.css';
import discussionsData from '@/data/discussions.json';

type Discussion = {
    id: number;
    level: number;
    question_jp: string;
    question_en: string;
    answer_jp: string;
    answer_en: string;
};

const discussions: Discussion[] = discussionsData as Discussion[];

const DailyDiscussion: React.FC = () => {
    const [topic, setTopic] = useState<Discussion | null>(null);
    const [showTranslation, setShowTranslation] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        // Calculate day of year to rotate topics
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Select topic based on day
        const index = dayOfYear % discussions.length;
        // eslint-disable-next-line
        setTopic(discussions[index]);
    }, []);

    const handleShuffle = () => {
        if (discussions.length === 0) return;
        const randomIndex = Math.floor(Math.random() * discussions.length);
        setTopic(discussions[randomIndex]);
        setShowTranslation(false);
        setShowAnswer(false);
    };

    if (!topic) return null;

    return (
        <section className={styles.container}>
            <button
                className={styles.shuffleTopRight}
                onClick={handleShuffle}
                title="Shuffle Topic"
            >
                🔀
            </button>
            <div className={styles.header}>
                今日のディスカッション (Today&apos;s Discussion)
            </div>

            <div
                className={styles.question}
                dangerouslySetInnerHTML={{ __html: topic.question_jp }}
            />

            <p className={styles.subText}>
                先生からの質問に答えてみましょう！ (Answer the teacher&apos;s question!)
            </p>

            <div className={styles.controls}>
                <button
                    className={`${styles.toggleBtn} ${showTranslation ? styles.active : ''}`}
                    onClick={() => setShowTranslation(!showTranslation)}
                >
                    {showTranslation ? 'Hide Translation' : 'Show Translation'}
                </button>
                <button
                    className={`${styles.toggleBtn} ${showAnswer ? styles.active : ''}`}
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    {showAnswer ? 'Hide Example Answer' : 'See Example Answer'}
                </button>
            </div>

            {showTranslation && (
                <div className={styles.revealContent}>
                    <span className={styles.label}>English Translation</span>
                    <p className={styles.revealText}>{topic.question_en}</p>
                </div>
            )}

            {showAnswer && (
                <div className={styles.revealContent}>
                    <span className={styles.label}>Example Answer (Student)</span>
                    <div
                        className={styles.revealText}
                        style={{ marginBottom: '0.5rem' }}
                        dangerouslySetInnerHTML={{ __html: topic.answer_jp }}
                    />
                    <p className={styles.revealText} style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                        {topic.answer_en}
                    </p>
                </div>
            )}
        </section>
    );
};

export default DailyDiscussion;
