import React from 'react';
import styles from './Button.module.css';
import { SocialIcon, SocialPlatform } from '../SocialIcon';

export type ButtonVariant = 'default' | 'light' | 'icon' | 'like';
export type ButtonSize = 'sm' | 'med' | 'lg';

export interface ButtonProps {
  /** Button variant style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button label text */
  label: string;
  /** Icon platform to display before label */
  icon?: SocialPlatform;
  /** Custom icon color - overrides default behavior */
  iconColor?: string;
  /** Whether the like button is in liked state (only applies to 'like' variant) */
  isLiked?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional class name */
  className?: string;
}

/**
 * Button component with multiple variants following the design system.
 * 
 * Variants:
 * - `default`: Filled black background with white text/icon
 * - `light`: White background with black border and text/icon
 * - `icon`: Text button with icon, no background
 * - `like`: Like button with heart icon, supports liked/unliked states
 * 
 * Sizes:
 * - `sm`: Small button for compact spaces
 * - `med`: Medium button (default)
 * - `lg`: Large button for prominent CTAs
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'med',
  label,
  icon,
  iconColor,
  isLiked = false,
  onClick,
  disabled = false,
  className = '',
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    isLiked && variant === 'like' ? styles.liked : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  /**
   * Determine the icon color based on variant and state
   */
  const getIconColor = (): string | undefined => {
    // If custom color is provided, use it
    if (iconColor) return iconColor;
    
    // For like variant in liked state, use status-like color
    if (variant === 'like' && isLiked) {
      return 'var(--abcd-sys-color-status-like)';
    }
    
    // Return undefined to use default SocialIcon variant behavior
    return undefined;
  };

  /**
   * Determine the SocialIcon variant based on button variant
   */
  const getIconVariant = (): 'colored' | 'white' => {
    // Default variant uses white icons (on dark background)
    if (variant === 'default') return 'white';
    // All other variants use colored icons
    return 'colored';
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    const color = getIconColor();
    
    // If we have a custom color, use it; otherwise use the variant
    if (color) {
      return <SocialIcon platform={icon} color={color} />;
    }
    
    return <SocialIcon platform={icon} variant={getIconVariant()} />;
  };

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon}>{renderIcon()}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default Button;
