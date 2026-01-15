import React from 'react';
import Link from 'next/link';
import styles from './TextbookCard.module.css';
import LevelBadge from './LevelBadge';
import { Textbook } from '@/data/textbooks/types';

interface TextbookCardProps {
    textbook: Textbook;
    index?: number;
}

const TextbookCard: React.FC<TextbookCardProps> = ({ textbook, index }) => {
    // Generate excerpt if missing (simple tag stripping)
    let excerpt = textbook.excerpt;
    if (!excerpt) {
        const html = textbook.textbook_html || '';
        // Remove ruby pronunciation text first
        const noRubyHtml = html.replace(/<rt>.*?<\/rt>/g, '').replace(/<rp>.*?<\/rp>/g, '');
        // Very basic strip tags, take first 60 chars
        const text = noRubyHtml.replace(/<[^>]+>/g, '').replace(/[\r\n]+/g, ' ').trim();
        excerpt = text.substring(0, 60) + (text.length > 60 ? '...' : '');
    }



    // Calculate blossom count based on textbook ID (assuming format TEXTBOOK_Lxx_yy)
    let blossomCount = 0;
    const parts = textbook.id.split('_');
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
        <Link href={`/textbooks/${textbook.id}`} className={styles.link}>
            <article className={styles.card} id={`textbook-${textbook.id}`}>
                {index !== undefined && (
                    <div className={styles.serialNumber}>
                        {String(index).padStart(2, '0')}
                    </div>
                )}

                <div className={styles.content}>
                    <div className={styles.header}>
                        <LevelBadge level={textbook.level} />
                        {blossomCount > 0 && (
                            <span style={{ marginLeft: '8px', fontSize: '1rem' }} aria-label={`${blossomCount} sakuras`}>
                                {'🌸'.repeat(blossomCount)}
                            </span>
                        )}
                    </div>

                    <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: textbook.title }} />
                    <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />

                    <div className={styles.footer}>
                        <span className={styles.readMore}>Read Textbook</span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default TextbookCard;
