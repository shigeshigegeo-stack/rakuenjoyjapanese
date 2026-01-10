import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header style={{
            padding: '0.8rem 0',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-color)',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
        }}>
            <div className="container">
                <Link href="/?reset=true" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    <div style={{ position: 'relative', width: '360px', height: '130px' }}>
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
        </header>
    );
};

export default Header;
