'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

// SVG Icons
const InstagramIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="40" height="40" rx="12" stroke="white" strokeWidth="3" />
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="3" />
    <circle cx="36" cy="12" r="3" fill="white" />
  </svg>
);

const MediumIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="14" cy="24" rx="10" ry="12" fill="white" />
    <ellipse cx="30" cy="24" rx="5" ry="11" fill="white" />
    <ellipse cx="42" cy="24" rx="2" ry="10" fill="white" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="40" height="40" rx="4" stroke="white" strokeWidth="3" />
    <path d="M14 20V34" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3" fill="white" />
    <path
      d="M22 34V26C22 22.6863 24.6863 20 28 20C31.3137 20 34 22.6863 34 26V34"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path d="M22 20V34" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={styles.likeIcon}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Social links data
const socialLinks = [
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: InstagramIcon,
  },
  {
    platform: 'medium',
    label: 'Medium',
    href: 'https://medium.com',
    icon: MediumIcon,
  },
  {
    platform: 'linkedin',
    label: 'Linkedin',
    href: 'https://linkedin.com',
    icon: LinkedinIcon,
  },
];

export default function ProfilePage() {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.profilePage}>
      {/* Background Image */}
      <Image
        src="/profile-bg.jpg"
        alt="Background"
        fill
        className={styles.backgroundImage}
        priority
      />

      {/* Profile Card */}
      <div className={styles.profileCard}>
        {/* Profile Section */}
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              src="/avatar.png"
              alt="Harry"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.userName}>Harry</h1>
            <p className={styles.userBio}>Hi I&apos;m Harry!</p>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialButton}
            >
              <link.icon />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.likeButton}
            onClick={() => setLiked(!liked)}
          >
            <HeartIcon filled={liked} />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}
