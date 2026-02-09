import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Dropdown.module.css';

export interface DropdownOption {
  /** Unique value for the option */
  value: string;
  /** Display label for the option */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface DropdownProps {
  /** Array of options to display */
  options: DropdownOption[];
  /** Currently selected value(s) */
  value?: string | string[];
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Label text displayed above the dropdown */
  label?: string;
  /** Helper text displayed below the dropdown */
  helperText?: string;
  /** Error state - displays error styling and error message */
  error?: boolean;
  /** Error message to display when error is true */
  errorMessage?: string;
  /** Allow multiple selection */
  multiple?: boolean;
  /** Whether the dropdown takes full width of its container */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  /** Additional class name for the container */
  className?: string;
}

/**
 * Dropdown component following the design system.
 * 
 * Features:
 * - Single and multiple selection modes
 * - Optional label above the dropdown
 * - Helper text or error message below the dropdown
 * - Error state with visual feedback
 * - Full width option
 * - Keyboard navigation support
 */
export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = '請選擇',
  label,
  helperText,
  error = false,
  errorMessage,
  multiple = false,
  fullWidth = false,
  disabled = false,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  // Convert value to array for easier handling
  const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

  // Get display text based on selection
  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    
    const selectedLabels = selectedValues
      .map((v) => options.find((opt) => opt.value === v)?.label)
      .filter(Boolean);
    
    if (multiple && selectedLabels.length > 1) {
      return `已選擇 ${selectedLabels.length} 項`;
    }
    
    return selectedLabels.join(', ');
  };

  // Handle option selection
  const handleSelect = (optionValue: string) => {
    if (!onChange) return;

    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (isOpen && focusedIndex >= 0) {
            const option = options[focusedIndex];
            if (!option.disabled) {
              handleSelect(option.value);
            }
          } else {
            setIsOpen(!isOpen);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setFocusedIndex((prev) => {
              const nextIndex = prev + 1;
              return nextIndex >= options.length ? 0 : nextIndex;
            });
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) => {
              const nextIndex = prev - 1;
              return nextIndex < 0 ? options.length - 1 : nextIndex;
            });
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
          break;
        case 'Tab':
          setIsOpen(false);
          break;
      }
    },
    [disabled, isOpen, focusedIndex, options]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset focused index when opening
  useEffect(() => {
    if (isOpen) {
      // Focus on selected item or first item
      const selectedIndex = options.findIndex((opt) => selectedValues.includes(opt.value));
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // Scroll focused option into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[focusedIndex] as HTMLElement;
      focusedElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const containerClasses = [
    styles.container,
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const triggerClasses = [
    styles.trigger,
    isOpen ? styles.open : '',
    error ? styles.error : '',
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  const displayHelperText = error && errorMessage ? errorMessage : helperText;
  const hasValue = selectedValues.length > 0;

  return (
    <div ref={containerRef} className={containerClasses}>
      {label && (
        <label htmlFor={dropdownId} className={styles.label}>
          {label}
        </label>
      )}
      
      <button
        ref={triggerRef}
        id={dropdownId}
        type="button"
        className={triggerClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${dropdownId}-label` : undefined}
        aria-describedby={displayHelperText ? `${dropdownId}-helper` : undefined}
      >
        <span className={`${styles.displayText} ${!hasValue ? styles.placeholder : ''}`}>
          {getDisplayText()}
        </span>
        <span className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          className={styles.menu}
          role="listbox"
          aria-multiselectable={multiple}
          tabIndex={-1}
        >
          {options.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            const isFocused = focusedIndex === index;

            const optionClasses = [
              styles.option,
              isSelected ? styles.optionSelected : '',
              isFocused ? styles.optionFocused : '',
              option.disabled ? styles.optionDisabled : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <li
                key={option.value}
                className={optionClasses}
                role="option"
                aria-selected={isSelected}
                aria-disabled={option.disabled}
                onClick={() => !option.disabled && handleSelect(option.value)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {multiple && (
                  <span className={styles.checkbox}>
                    {isSelected && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                )}
                <span className={styles.optionLabel}>{option.label}</span>
              </li>
            );
          })}
        </ul>
      )}

      {displayHelperText && (
        <span
          id={`${dropdownId}-helper`}
          className={`${styles.helperText} ${error ? styles.errorText : ''}`}
        >
          {displayHelperText}
        </span>
      )}
    </div>
  );
};

export default Dropdown;
