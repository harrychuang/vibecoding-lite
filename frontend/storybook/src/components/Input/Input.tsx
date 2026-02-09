import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export type InputVariant = 'default' | 'outlined';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant style */
  variant?: InputVariant;
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error state - displays error styling and error message */
  error?: boolean;
  /** Error message to display when error is true */
  errorMessage?: string;
  /** Whether the input takes full width of its container */
  fullWidth?: boolean;
  /** Additional class name for the container */
  className?: string;
}

/**
 * Input component following the design system.
 * 
 * Features:
 * - Multiple variants: default (filled) and outlined
 * - Optional label above the input
 * - Helper text or error message below the input
 * - Error state with visual feedback
 * - Full width option
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      label,
      helperText,
      error = false,
      errorMessage,
      fullWidth = false,
      className = '',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const containerClasses = [
      styles.container,
      fullWidth ? styles.fullWidth : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputClasses = [
      styles.input,
      styles[variant],
      error ? styles.error : '',
      disabled ? styles.disabled : '',
    ]
      .filter(Boolean)
      .join(' ');

    const displayHelperText = error && errorMessage ? errorMessage : helperText;

    return (
      <div className={containerClasses}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={displayHelperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {displayHelperText && (
          <span
            id={`${inputId}-helper`}
            className={`${styles.helperText} ${error ? styles.errorText : ''}`}
          >
            {displayHelperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
