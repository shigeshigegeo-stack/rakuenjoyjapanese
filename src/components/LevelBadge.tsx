import React from 'react';

interface LevelBadgeProps {
  level: string | number;
}

const LevelBadge: React.FC<LevelBadgeProps> = ({ level }) => {
  const normalizedLevel = typeof level === 'number' ? `Level ${level}` : level;

  const getLevelStyle = (lvl: string) => {
    // Wa-Modern "Hanko" (Stamp) style palette
    // Using deeper, traditional colors

    // Cycle for levels 1-20
    if (lvl.startsWith('Level')) {
      const levelNumMatch = lvl.match(/\d+/);
      const levelNum = levelNumMatch ? parseInt(levelNumMatch[0], 10) : 1;

      const palette = [
        { border: '#558B2F', color: '#558B2F' }, // Uguisu-iro (Olive Green) - L1
        { border: '#1565C0', color: '#1565C0' }, // Ruri-iro (Deep Blue) - L2
        { border: '#8E24AA', color: '#8E24AA' }, // Purple - L3
        { border: '#D81B60', color: '#D81B60' }, // Deep Pink - L4
        { border: '#F9A825', color: '#F9A825' }, // Mustard - L5
        { border: '#00897B', color: '#00897B' }, // Teal - L6
        { border: '#3949AB', color: '#3949AB' }, // Indigo - L7
        { border: '#6D4C41', color: '#6D4C41' }  // Brown - L8
      ];

      const style = palette[(levelNum - 1) % palette.length];
      return { borderColor: style.border, color: style.color };
    }

    if (lvl.startsWith('N')) {
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
