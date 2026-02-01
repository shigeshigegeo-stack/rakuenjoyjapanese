'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

type Character = {
    id: string;
    name: string;
    role: string;
    age: number;
    nationality: string;
    family?: string;
    description: string;
    image: string;
};

const characters: Character[] = [
    {
        id: 'anna',
        name: 'アナさん',
        role: 'Sakura University Student',
        age: 20,
        nationality: 'German 🇩🇪',
        family: 'Parents (Germany), Brother (NY Banker), Sister (London Piano Student)',
        description: 'A 20-year-old student from Germany studying at Sakura University.',
        image: '/images/characters/anna.png',
    },
    {
        id: 'yamada',
        name: '山田先生',
        role: 'Sakura University Teacher',
        age: 45,
        nationality: 'Japanese 🇯🇵',
        description: 'A teacher at Sakura University.',
        image: '/images/characters/yamada.png',
    },
    {
        id: 'john',
        name: 'ジョンさん',
        role: 'Bank Employee (NEX Bank)',
        age: 28,
        nationality: 'American 🇺🇸',
        family: 'Younger Brother (Working in USA)',
        description: 'Works at NEX Bank. Also a working student at Sakura University.',
        image: '/images/characters/john.png',
    },
    {
        id: 'kim',
        name: 'キムさん',
        role: 'LOOP Soft Employee',
        age: 25,
        nationality: 'Korean 🇰🇷',
        family: 'Older Brother (Uni Researcher), Older Sister (Works at Osaka Dept Store)',
        description: 'Works at LOOP Soft. Also a working student at Sakura University.',
        image: '/images/characters/kim.png',
    },
    {
        id: 'park',
        name: 'パクさん',
        role: 'Doctor (Hikari Hospital)',
        age: 30,
        nationality: 'Korean 🇰🇷',
        description: 'A doctor at Hikari Hospital. Also a working student at Sakura University.',
        image: '/images/characters/park.png',
    },
];

export default function CharactersPage() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backButton}>
                ← Back to Menu
            </Link>

            <div style={{ textAlign: 'center' }}>
                <h1 className={styles.title}>Characters</h1>
                <p className={styles.subtitle}>Meet the people of Sakura University & Tokyo <br />(Everyone lives in Tokyo)</p>
            </div>

            <div className={styles.grid}>
                {characters.map((char) => (
                    <div key={char.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={char.image}
                                alt={char.name}
                                width={140}
                                height={140}
                                className={styles.image}
                                priority
                            />
                        </div>

                        <div className={styles.nameGroup}>
                            <h2 className={styles.nameJp}>{char.name}</h2>
                            <span className={styles.role}>{char.role}</span>
                        </div>

                        <ul className={styles.infoList}>
                            <li className={styles.infoItem}>
                                <span className={styles.label}>Age</span>
                                <span className={styles.value}>{char.age} years old</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.label}>Origin</span>
                                <span className={styles.value}>{char.nationality}</span>
                            </li>
                            {char.family && (
                                <li className={styles.infoItem}>
                                    <span className={styles.label}>Family</span>
                                    <span className={styles.value}>{char.family}</span>
                                </li>
                            )}
                            <li className={styles.infoItem}>
                                <span className={styles.label}>Loc</span>
                                <span className={styles.value}>Tokyo</span>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
