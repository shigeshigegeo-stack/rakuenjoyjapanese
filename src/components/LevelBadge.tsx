import React from 'react';

interface LevelBadgeProps {
  level: string | number;
}

const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  const normalizedLevel = typeof level === 'number' ? `Level ${level}` : level;

  const getLevelStyle = (lvl: string) => {
    // Wa-Modern "Hanko" (Stamp) style palette
    // Using deeper, traditional colors
    if (lvl === 'Level 1') {
      return { borderColor: '#558B2F', color: '#558B2F' }; // Uguisu-iro (Olive Green)
    } else if (lvl === 'Level 2') {
      return { borderColor: '#1565C0', color: '#1565C0' }; // Ruri-iro (Deep Blue)
    } else if (lvl.startsWith('N')) {
      // JLPT Levels
      if (lvl === 'N5' || lvl === 'N4') return { borderColor: '#00838F', color: '#00838F' }; // Asagi (Teal)
      if (lvl === 'N3') return { borderColor: '#EF6C00', color: '#EF6C00' }; // Kaki (Persimmon)
      return { borderColor: '#C62828', color: '#C62828' }; // Akane (Deep Red)
    }
    return { borderColor: '#8D6E63', color: '#8D6E63' }; // Brown
  };

  const baseStyle = getLevelStyle(normalizedLevel);

  const style: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: `2px solid ${baseStyle.borderColor}`,
    color: baseStyle.color,
    padding: '4px 10px',
    borderRadius: '8px', // Slightly rounded, but mostly square like a seal
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: '700',
    display: 'inline-block',
    letterSpacing: '0.05em',
    boxShadow: `2px 2px 0px ${baseStyle.borderColor}33` // Subtle offset shadow like a stamp impression
  };

  return (
    <span style={style}>
      {normalizedLevel}
    </span>
  );
};

export default LevelBadge;
