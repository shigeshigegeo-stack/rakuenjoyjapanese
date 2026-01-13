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
        // Remove ruby pronunciation text first
        const noRubyHtml = html.replace(/<rt>.*?<\/rt>/g, '').replace(/<rp>.*?<\/rp>/g, '');
        // Very basic strip tags, take first 60 chars
        const text = noRubyHtml.replace(/<[^>]+>/g, '').replace(/[\r\n]+/g, ' ').trim();
        excerpt = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    }

    // Default lesson if missing
    const lesson = story.lesson || 'L1';

    // Calculate blossom count based on story ID (assuming format STORY_Lxx_yy)
    let blossomCount = 0;
    const parts = story.id.split('_');
    if (parts.length >= 3) {
        const subLevel = parseInt(parts[2], 10);
        if (!isNaN(subLevel)) {
            // 1->1, 2->2, 3->2, 4->3
            if (subLevel === 1) blossomCount = 1;
            else if (subLevel === 2 || subLevel === 3) blossomCount = 2;
            else if (subLevel >= 4) blossomCount = 3;
        }
    }

    return (
        <Link href={`/stories/${story.id}`} className={styles.link}>
            <article className={styles.card} id={`story-${story.id}`}>
                {index !== undefined && (
                    <div className={styles.serialNumber}>
                        {String(index).padStart(2, '0')}
                    </div>
                )}

                <div className={styles.content}>
                    <div className={styles.header}>
                        <LevelBadge level={story.level} />
                        {blossomCount > 0 && (
                            <span style={{ marginLeft: '8px', fontSize: '1rem' }} aria-label={`${blossomCount} sakuras`}>
                                {'🌸'.repeat(blossomCount)}
                            </span>
                        )}
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
