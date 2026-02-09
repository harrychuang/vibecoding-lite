import React from 'react';
import styles from './Card.module.css';

export type CardVariant = 'default' | 'outlined' | 'elevated';

export interface CardProps {
  /** Card variant style */
  variant?: CardVariant;
  /** Card content */
  children: React.ReactNode;
  /** Whether the card has hover effect */
  hoverable?: boolean;
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Whether the card takes full width of its container */
  fullWidth?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * Card component following the design system.
 * 
 * Features:
 * - Multiple variants: default (subtle shadow), outlined (border), elevated (prominent shadow)
 * - Optional hover effect
 * - Clickable option with cursor feedback
 * - Full width option
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  hoverable = false,
  clickable = false,
  onClick,
  fullWidth = false,
  className = '',
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : '',
    clickable ? styles.clickable : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
