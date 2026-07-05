import React from 'react';

/**
 * Jeromy React Conventions:
 * - Functional components.
 * - Semantic typography.
 * - No hardcoded colors (uses CSS variables).
 */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, style, onClick }) => {
  return (
    <div className={`glass-card ${className}`} style={style} onClick={onClick}>
      {title && <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{title}</h3>}
      {children}
    </div>
  );
};
