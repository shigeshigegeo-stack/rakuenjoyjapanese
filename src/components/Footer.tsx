import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center',
            color: 'var(--text-light)',
            backgroundColor: '#fff',
            fontSize: '0.95rem'
        }}>
            <div className="container">
                <p style={{ fontWeight: 500 }}>&copy; {new Date().getFullYear()} Japanese Learning Stories. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    Learn Japanese through reading traditional tales.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
