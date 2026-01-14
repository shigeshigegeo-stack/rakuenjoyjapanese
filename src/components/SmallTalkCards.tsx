'use client';

import React, { useState } from 'react';
import styles from './SmallTalkCards.module.css';
import smallTalkData from '@/data/small_talk.json';
import TextToSpeechButton from './TextToSpeechButton';

type SmallTalkCard = {
    id: string;
    category: string;
    sub_category?: string;
    topic: string;
    catchphrase: string;
    keyword: string;
    reading: string;
    quick_meaning: string;
    cultural_background: string;
    communication_starters: {
        teacher_question_jp: string;
        teacher_question_en: string;
    };
    ask_your_teacher: string;
    mission: string;
    can_do?: string;
};

const cards: SmallTalkCard[] = smallTalkData as SmallTalkCard[];

const CATEGORIES = [
    { id: 'Daily & Modern', label: 'Daily & Modern', sub: '現代日本', icon: '🏙️', description: 'Slang, Modern Rules, Events', color: '#3b82f6' },
    { id: 'Natural Nuance', label: 'Natural Nuance', sub: '自然な表現', icon: '🍃', description: 'Onomatopoeia, Idioms, Phrases', color: '#10b981' },
    { id: 'Deep Culture', label: 'Deep Culture', sub: '文化と知恵', icon: '⛩️', description: 'Four-char Idioms, Proverbs, Traditions', color: '#f59e0b' },
    { id: 'Random Mix', label: 'Variety Mix', sub: 'バラエティ・ミックス', icon: '🎲', description: 'Mix of all categories', color: '#8b5cf6' }
];

const SmallTalkCards: React.FC = () => {
    // Navigation State
    const [viewMode, setViewMode] = useState<'home' | 'list'>('home');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(null);
    const [mixedCards, setMixedCards] = useState<SmallTalkCard[]>([]);

    // Modal State
    const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
    const [showBackground, setShowBackground] = useState(false);

    // Derived Logic
    let baseCards: SmallTalkCard[] = [];
    if (selectedCategory === 'Random Mix') {
        baseCards = mixedCards;
    } else if (selectedCategory) {
        baseCards = cards.filter(c => c.category === selectedCategory);
    }

    // Extract available sub-categories for current view
    const availableSubCategories = Array.from(new Set(baseCards.map(c => c.sub_category).filter(Boolean))) as string[];

    // Apply Sub-Category Filter
    const displayCards = selectedSubFilter
        ? baseCards.filter(c => c.sub_category === selectedSubFilter)
        : baseCards;

    const activeCard = selectedCardId ? cards.find(c => c.id === selectedCardId) : null;
    const currentCategoryInfo = CATEGORIES.find(c => c.id === selectedCategory);

    // Handlers
    const handleCategorySelect = (id: string) => {
        setSelectedCategory(id);
        setSelectedSubFilter(null); // Reset sub-filter
        if (id === 'Random Mix') {
            const shuffled = [...cards].sort(() => Math.random() - 0.5);
            setMixedCards(shuffled);
        }
        setViewMode('list');
    };

    const handleBackToHome = () => {
        setViewMode('home');
        setSelectedCategory(null);
        setSelectedSubFilter(null);
        setMixedCards([]);
    };

    const handleCardClick = (id: string) => {
        setSelectedCardId(id);
        setShowBackground(false);
    };

    const handleCloseModal = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        setSelectedCardId(null);
        setShowBackground(false);
    };

    // 1. Home View (Genre Selection)
    if (viewMode === 'home') {
        return (
            <section className={styles.container}>
                <div className={styles.header}>
                    <span>☕ Select a Genre</span>
                </div>
                <div className={styles.categoryGrid}>
                    {CATEGORIES.map(cat => (
                        <div
                            key={cat.id}
                            className={styles.categoryCard}
                            onClick={() => handleCategorySelect(cat.id)}
                            style={{ borderTop: `4px solid ${cat.color}` }}
                        >
                            <div className={styles.categoryIcon}>{cat.icon}</div>
                            <div>
                                <div className={styles.categoryTitle} style={{ color: cat.color }}>{cat.label}</div>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{cat.sub}</div>
                            </div>
                            <div className={styles.categoryDesc}>{cat.description}</div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // 2. List View (Topic Selection)
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>{currentCategoryInfo?.icon}</span>
                    <span>{currentCategoryInfo?.label}</span>
                </span>
                <button onClick={handleBackToHome} className={styles.backButton}>← Change Genre</button>
            </div>

            {/* Sub-Category Filter Chips */}
            {availableSubCategories.length > 0 && (
                <div className={styles.filterContainer}>
                    <button
                        className={`${styles.filterChip} ${!selectedSubFilter ? styles.activeFilter : ''}`}
                        onClick={() => setSelectedSubFilter(null)}
                    >
                        All
                    </button>
                    {availableSubCategories.map(sub => (
                        <button
                            key={sub}
                            className={`${styles.filterChip} ${selectedSubFilter === sub ? styles.activeFilter : ''}`}
                            onClick={() => setSelectedSubFilter(sub === selectedSubFilter ? null : sub)}
                        >
                            {sub}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles.topicGrid}>
                {displayCards.map((card) => {
                    // Find color for card based on its category (useful for Mixed mode)
                    const catColor = CATEGORIES.find(c => c.id === card.category)?.color || '#374151';

                    return (
                        <div
                            key={card.id}
                            className={styles.miniCard}
                            style={{
                                borderLeftColor: catColor
                            }}
                            onClick={() => handleCardClick(card.id)}
                        >
                            <div className={styles.miniKeyword} style={{ color: catColor }}>
                                {card.keyword}
                            </div>
                            <div className={styles.miniReading}>{card.reading}</div>
                            {card.sub_category && (
                                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem', fontWeight: 500 }}>
                                    {card.sub_category}
                                </div>
                            )}
                            <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem', fontStyle: 'italic' }}>
                                {card.topic === card.keyword ? '' : card.topic}
                            </div>
                            {selectedCategory === 'Random Mix' && (
                                <div className={styles.categoryTag} style={{ fontSize: '0.7rem', marginTop: '0.5rem', marginBottom: 0 }}>
                                    {card.category}
                                </div>
                            )}
                        </div>
                    );
                })}
                {displayCards.length === 0 && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚧</div>
                        <p>Coming Soon</p>
                    </div>
                )}
            </div>

            {/* 3. Modal Overlay (Detail View) */}
            {activeCard && (
                <div className={styles.modalOverlay} onClick={handleCloseModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <span className={styles.categoryTag}>{activeCard.category}</span>
                                {activeCard.sub_category && (
                                    <span className={styles.categoryTag} style={{ backgroundColor: '#f3f4f6', color: '#4b5563' }}>
                                        {activeCard.sub_category}
                                    </span>
                                )}
                            </div>
                            <button className={styles.closeButton} onClick={handleCloseModal}>✕</button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.catchphrase}>
                                &quot;{activeCard.catchphrase}&quot;
                            </div>

                            <div className={styles.keywordSection}>
                                <div className={styles.reading}>({activeCard.reading})</div>
                                <div className={styles.keyword}>{activeCard.keyword}</div>
                                <div style={{ marginTop: '0.5rem' }}>
                                    <TextToSpeechButton text={activeCard.keyword} label="🔊" />
                                </div>
                            </div>

                            <div className={styles.section}>
                                <div className={styles.sectionTitle}>💡 Quick Meaning</div>
                                <div className={styles.contentBox}>
                                    <div className={styles.meaning}>{activeCard.quick_meaning}</div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <button
                                    className={`${styles.toggleBtn} ${showBackground ? styles.active : ''}`}
                                    onClick={() => setShowBackground(!showBackground)}
                                    style={{ marginBottom: '0.5rem' }}
                                >
                                    {showBackground ? 'Hide Cultural Background' : 'Show Cultural Background & Tips'}
                                </button>

                                {showBackground && (
                                    <div className={styles.contentBox} style={{ backgroundColor: '#fff' }}>
                                        <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{activeCard.cultural_background}</p>
                                    </div>
                                )}
                            </div>

                            <div className={styles.section}>
                                <div className={styles.sectionTitle}>🗣️ Communication Starters</div>
                                <div className={styles.communicationBox}>
                                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Teacher might ask you:</div>
                                    <div className={styles.bubble}>
                                        {activeCard.communication_starters.teacher_question_jp}
                                        <div style={{ marginTop: '0.25rem' }}>
                                            <TextToSpeechButton text={activeCard.communication_starters.teacher_question_jp} label="🔊" />
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                        {activeCard.communication_starters.teacher_question_en}
                                    </div>
                                </div>

                                <div className={styles.communicationBox} style={{ backgroundColor: '#eff6ff', borderColor: '#dbeafe' }}>
                                    <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Challenge! Ask your teacher:</div>
                                    <div className={styles.bubble}>
                                        {activeCard.ask_your_teacher.split('\n')[0]}
                                        <div style={{ marginTop: '0.25rem' }}>
                                            <TextToSpeechButton text={activeCard.ask_your_teacher.split('\n')[0]} label="🔊" />
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                        {activeCard.ask_your_teacher.split('\n').length > 1 ? activeCard.ask_your_teacher.split('\n')[1] : ''}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <div className={styles.missionBox}>
                                    <span className={styles.missionIcon}>🎯</span>
                                    <div>
                                        <div className={styles.sectionTitle} style={{ color: '#059669', marginBottom: '0.25rem' }}>Weekly Mission</div>
                                        <div style={{ fontWeight: '500' }}>{activeCard.mission}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SmallTalkCards;
