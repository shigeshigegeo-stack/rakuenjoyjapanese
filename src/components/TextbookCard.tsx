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



    // Calculate blossom count and display level based on textbook ID (assuming format TEXTBOOK_Lxx_yy)
    let blossomCount = 0;
    let displayLevel = textbook.level;

    const parts = textbook.id.split('_');
    if (parts.length >= 3) {
        // e.g. TEXTBOOK_L05_01
        const levelPart = parts[1]; // L05
        const subLevelPart = parts[2]; // 01

        const subLevel = parseInt(subLevelPart, 10);
        const levelNum = parseInt(levelPart.replace('L', ''), 10);

        if (!isNaN(levelNum) && !isNaN(subLevel)) {
            // Format: Level X-Y
            displayLevel = `Level ${levelNum}-${subLevel}`;
        }

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
                        <LevelBadge level={displayLevel} />
                        {blossomCount > 0 && (() => {
                            let flowerMarginLeft = '4px';
                            if (blossomCount === 1) {
                                flowerMarginLeft = '15px'; // Shifted further left
                            } else if (blossomCount === 2) {
                                if (index && index >= 100) {
                                    flowerMarginLeft = '4px';
                                } else {
                                    flowerMarginLeft = '12px';
                                }
                            } else if (blossomCount >= 3) {
                                if (index && index >= 100) {
                                    flowerMarginLeft = '-8px'; // Shifted further left for 3-digit serials
                                } else {
                                    flowerMarginLeft = '0px';
                                }
                            }

                            return (
                                <span style={{
                                    marginLeft: flowerMarginLeft,
                                    fontSize: '1rem',
                                    transition: 'all 0.3s',
                                    position: 'relative',
                                    top: '-5px' // Shifted further up
                                }} aria-label={`${blossomCount} sakuras`}>
                                    {'🌸'.repeat(blossomCount)}
                                </span>
                            );
                        })()}
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
