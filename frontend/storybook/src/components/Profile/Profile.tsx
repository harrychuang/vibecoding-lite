import React from 'react';
import styles from './Profile.module.css';

export interface ProfileProps {
  /** User's display name */
  name: string;
  /** Additional user information (e.g., job title, location) */
  info?: string;
  /** Avatar image URL */
  avatarUrl?: string;
  /** Alt text for the avatar image */
  avatarAlt?: string;
  /** Additional class name */
  className?: string;
}

/**
 * Profile component displays a user's avatar, name, and info.
 * 
 * Used to show user profile information in a card-like format with:
 * - A circular avatar image
 * - User name in large, bold text
 * - Optional user info in smaller, lighter text
 */
export const Profile: React.FC<ProfileProps> = ({
  name,
  info,
  avatarUrl,
  avatarAlt = 'User avatar',
  className = '',
}) => {
  const containerClasses = [styles.profile, className].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div className={styles.avatar}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={avatarAlt} className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder} />
        )}
      </div>
      <h2 className={styles.name}>{name}</h2>
      {info && <p className={styles.info}>{info}</p>}
    </div>
  );
};

export default Profile;
