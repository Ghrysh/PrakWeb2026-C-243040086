// src/BadgeSkill.jsx
import React from 'react';

function BadgeSkill({ skill }) {
  return (
    <span
      style={{
        display: 'inline-block',
        backgroundColor: '#E8F0FE',
        color: '#1B365D',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
      }}
    >
      #{skill}
    </span>
  );
}

export default BadgeSkill;
