import React from 'react';
import Link from 'next/link';
import styles from './StoryCard.module.css';
import LevelBadge from './LevelBadge';

interface Story {
    id: string;
    title: string;
    level: string | number;
    lesson?: string;
    excerpt?: string;
    story_html?: string;
    content_html?: string;
    content?: string;
}

interface StoryCardProps {
    story: Story;
    index?: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, index }) => {
    // Generate excerpt if missing (simple tag stripping)
    let excerpt = story.excerpt;
    if (!excerpt) {
        const html = story.story_html || story.content_html || story.content || '';
        // Very basic strip tags, take first 60 chars
        const text = html.replace(/<[^>]+>/g, '').replace(/[\r\n]+/g, ' ').trim();
        excerpt = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    }

    // Default lesson if missing
    const lesson = story.lesson || 'L1';

    return (
        <Link href={`/stories/${story.id}`} className={styles.link}>
            <article className={styles.card}>
                {index !== undefined && (
                    <div className={styles.serialNumber}>
                        {String(index).padStart(2, '0')}
                    </div>
                )}

                <div className={styles.content}>
                    <div className={styles.header}>
                        <LevelBadge level={story.level} />
                    </div>

                    <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: story.title }} />
                    <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />

                    <div className={styles.footer}>
                        <span className={styles.readMore}>Read Story</span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default StoryCard;
