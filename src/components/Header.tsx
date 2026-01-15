'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    // Determine the home link based on current page
    let homeLink = '/?reset=true';
    if (pathname && pathname.startsWith('/textbooks/')) {
        const textbookId = pathname.split('/').pop();
        if (textbookId) {
            homeLink = `/?returnTo=${textbookId}`;
        }
    }

    return (
        <header style={{
            padding: '0',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-color)',
            textAlign: 'center',
            backgroundColor: '#F3ECDC', // Matched to logo background color
            // backdropFilter: 'blur(10px)', // Removed blur as we are using solid color to match logo
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* Top Decorative Band */}
            <div style={{
                width: '100%',
                height: '50px',
                backgroundImage: 'url(/header-pattern.jpg)',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'repeat-x',
                opacity: 0.9,
            }} />

            <div className="container" style={{ padding: '0', zIndex: 1, margin: '0 0 -8px 0' }}>
                <Link href={homeLink} style={{ textDecoration: 'none', display: 'inline-block', lineHeight: 0 }}>
                    <div style={{ position: 'relative', width: '540px', height: '195px' }}>
                        <Image
                            src="/logo.png"
                            alt="楽 ～Enjoy Japanese～"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Bottom Decorative Band */}
            <div style={{
                width: '100%',
                height: '50px',
                backgroundImage: 'url(/header-pattern.jpg)',
                backgroundSize: 'auto 100%',
                backgroundRepeat: 'repeat-x',
                opacity: 0.9,
            }} />

            {/* What's gaku Button */}
            <Link href="/about" style={{
                position: 'absolute',
                right: '20px',
                top: '100%',
                marginTop: '10px', // Positioned completely below the obi
                zIndex: 10,
                textDecoration: 'none'
            }}>
                <button style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '1px solid var(--accent-red)',
                    background: 'white',
                    color: 'var(--accent-red)',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-red)';
                        e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = 'var(--accent-red)';
                    }}
                >
                    What’s 楽 Gaku ?
                </button>
            </Link>
        </header>
    );
};

export default Header;
