'use client';

import React, { useState, useEffect } from 'react';
import styles from './DailyDiscussion.module.css';
import discussionsData from '@/data/discussions.json';

type Discussion = {
    id: number;
    level: number;
    question_jp: string;
    question_en: string;
};

const discussions: Discussion[] = discussionsData as Discussion[];

const DailyDiscussion: React.FC = () => {
    const [topic, setTopic] = useState<Discussion | null>(null);

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


            <div
                className={styles.question}
                dangerouslySetInnerHTML={{ __html: topic.question_jp }}
            />



            <div className={styles.revealContent}>
                <span className={styles.label}>English Translation</span>
                <p className={styles.revealText}>{topic.question_en}</p>
            </div>


        </section>
    );
};

export default DailyDiscussion;
