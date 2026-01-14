'use client';

import React from 'react';

export default function BackButton() {
    return (
        <button
            onClick={() => window.history.back()}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.1rem',
                color: 'var(--text-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0'
            }}
        >
            ← Back to Textbooks
        </button>
    );
}
