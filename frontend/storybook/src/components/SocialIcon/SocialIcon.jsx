import styles from './SocialIcon.module.css';
import {
  imgC,
  imgD,
  imgVector,
  imgVector1,
  imgVector2,
  imgVector3,
  imgPlatformLinkedInColorOriginal,
  imgGroup,
  imgGroup1,
  imgVector4,
  imgVector5,
  imgVector6,
  imgPlatformPinterestColorOriginal,
  imgVector7,
  imgVector8,
  imgVector9,
  imgVector10,
  imgVector11,
  imgVector12,
  imgVector13,
  imgVector14,
  imgVector15,
  imgVector16,
  imgVector17,
  imgVector18,
  imgPlatformDribbbleColorOriginal,
  imgVector19,
  imgVector20,
  imgVector21,
  imgVector22,
  imgVector23,
  imgPlatformTelegramColorOriginal,
  imgVector24,
  imgVector25,
  imgVector26,
  imgVector27,
  imgVector28,
  imgVector29,
  imgVector30,
  imgPlatformMessengerColorOriginal,
  imgVector31,
  imgVector32,
  imgVector33,
  imgVector34,
  imgVector35,
  imgVector36,
  imgPlatformLinkedInColorNegative,
  imgPlatformGoogleColorNegative,
  imgVector37,
  imgVector38,
  imgPlatformPinterestColorNegative,
  imgVector39,
  imgVector40,
  imgVector41,
  imgVector42,
  imgVector43,
  imgVector44,
  imgVector45,
  imgPlatformDribbbleColorNegative,
  imgVector46,
  imgVector47,
  imgVector48,
  imgPlatformTelegramColorNegative,
  imgVector49,
  imgVector50,
  imgVector51,
  imgVector52,
  imgVector53,
  imgVector54,
} from './socialIconsAssets.js';

/** @typedef {'original' | 'negative'} SocialIconVariant */

/**
 * @typedef {'Apple' | 'Discord' | 'Dribbble' | 'Facebook' | 'Figma' | 'Github' | 'Google' | 'Instagram' | 'LinkedIn' | 'Medium' | 'Pinterest' | 'Spotify' | 'Telegram' | 'TikTok' | 'Tumblr' | 'Twitch' | 'YouTube' | 'X (Twitter)' | 'Threads' | 'WhatsApp' | 'Messenger' | 'Bluesky'} SocialIconPlatform
 */

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

/**
 * @param {object} props
 * @param {SocialIconPlatform} [props.platform]
 * @param {SocialIconVariant} [props.variant]
 * @param {number | string} [props.size]
 * @param {string} [props.className]
 * @param {string} [props['aria-label']]
 * @param {string} [props.title]
 */
export function SocialIcon({
  platform = 'Facebook',
  variant = 'original',
  size,
  className,
  'aria-label': ariaLabel,
  title,
}) {
  const color = variant === 'negative' ? 'Negative' : 'Original';
  const dim =
    size === undefined || size === null
      ? null
      : typeof size === 'number'
        ? `${size}px`
        : size;

  const rootStyle = dim ? { width: dim, height: dim } : undefined;
  const hasExplicitSize = dim != null;

  const common = {
    className,
    hasExplicitSize,
    rootStyle,
    ariaLabel,
    title,
  };

  if (platform === 'X (Twitter)' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '7.93% 4.17% 9.21% 4.17%' }}>
          <img alt="" className={styles.absImg} src={imgVector} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Instagram' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 0.06% 0.02% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector1} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '24.32%' }}>
          <img alt="" className={styles.absImg} src={imgVector2} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '17.3% 17.3% 70.7% 70.7%' }}>
          <img alt="" className={styles.absImg} src={imgVector3} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'LinkedIn' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformLinkedInColorOriginal} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Google' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div
          className={cx(styles.layer, styles.googleMask)}
          style={{
            inset: '-0.55% -0.9% -0.61% -0.59%',
            WebkitMaskImage: `url(${imgGroup})`,
            maskImage: `url(${imgGroup})`,
            maskPosition: '0.282px 0.264px',
            WebkitMaskPosition: '0.282px 0.264px',
            maskSize: '48px 48px',
            WebkitMaskSize: '48px 48px',
          }}
        >
          <div className={styles.googleMaskInner} style={{ inset: '-2.76% -0.96% -0.97% -0.96%' }}>
            <img alt="" className={styles.blockImg} src={imgGroup1} draggable={false} />
          </div>
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'YouTube' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '14.77% -0.1% 14.77% 0.1%' }}>
          <img alt="" className={styles.absImg} src={imgVector4} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '35.13% 33.99% 35.13% 39.87%' }}>
          <img alt="" className={styles.absImg} src={imgVector5} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Apple' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 7.43% 0 8.33%' }}>
          <img alt="" className={styles.absImg} src={imgVector6} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Pinterest' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformPinterestColorOriginal} draggable={false} />
        <div className={styles.layer} style={{ inset: '0 0.08% -0.08% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector7} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Medium' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '25.29% 0 26.73% 90.08%' }}>
          <img alt="" className={styles.absImg} src={imgVector8} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '22.5% 12.65% 23.94% 59.14%' }}>
          <img alt="" className={styles.absImg} src={imgVector9} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '20.83% 43.59% 22.27% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector10} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Github' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 0 1.67% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector11} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Threads' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 7.2% 0 6.77%' }}>
          <img alt="" className={styles.absImg} src={imgVector12} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'WhatsApp' && color === 'Original') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 0.48% 0 0' }}>
          <img alt="" className={styles.absImg} src={imgVector13} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Figma' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ top: '66.67%', right: '50%', bottom: '0', left: '16.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector14} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '33.33%', right: '50%', bottom: '33.33%', left: '16.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector15} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '0', right: '50%', bottom: '66.67%', left: '16.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector16} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '0', right: '16.67%', bottom: '66.67%', left: '50%' }}>
          <img alt="" className={styles.absImg} src={imgVector17} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '33.33%', right: '16.67%', bottom: '33.33%', left: '50%' }}>
          <img alt="" className={styles.absImg} src={imgVector18} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Dribbble' && color === 'Original') {
    return (
      <SocialIconRoot {...common}>
        <img alt="" className={styles.absImg} src={imgPlatformDribbbleColorOriginal} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Discord' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '11% 0 12.78% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector19} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'TikTok' && color === 'Original') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '4% 5.61% 0 19.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector20} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '4% 10.41% 4% 11.04%' }}>
          <img alt="" className={styles.absImg} src={imgVector21} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '0 10.41% 9.14% 6.25%' }}>
          <img alt="" className={styles.absImg} src={imgVector22} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Tumblr' && color === 'Original') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 22.5% 0 20.83%' }}>
          <img alt="" className={styles.absImg} src={imgVector23} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Telegram' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformTelegramColorOriginal} draggable={false} />
        <div className={styles.layer} style={{ inset: '30.1% 26.8% 24.9% 18.9%' }}>
          <img alt="" className={styles.absImg} src={imgVector24} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Bluesky' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '6.83% 1.67% 6.85% 1.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector25} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Spotify' && color === 'Original') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 0.31% 0.31% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector26} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Twitch' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '7.14% 14.28% 26.79% 28.57%' }}>
          <img alt="" className={styles.absImg} src={imgVector27} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '0 7.14% 0 7.15%' }}>
          <img alt="" className={styles.absImg} src={imgVector28} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '19.64%', right: '25%', bottom: '58.93%', left: '67.86%' }}>
          <img alt="" className={styles.absImg} src={imgVector29} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '19.64% 44.64% 58.93% 48.22%' }}>
          <img alt="" className={styles.absImg} src={imgVector30} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Messenger' && color === 'Original') {
    return (
      <SocialIconRoot {...common} overflow messenger>
        <img alt="" className={styles.absImg} src={imgPlatformMessengerColorOriginal} draggable={false} />
        <div className={styles.layer} style={{ inset: '30.99% 18.52% 34% 18.52%' }}>
          <img alt="" className={styles.absImg} src={imgVector31} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Facebook' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 0 0.37% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector32} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'X (Twitter)' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '7.93% 4.17% 9.21% 4.17%' }}>
          <img alt="" className={styles.absImg} src={imgVector33} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Instagram' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 0.06% 0.02% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector34} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '24.32%' }}>
          <img alt="" className={styles.absImg} src={imgVector35} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '17.3% 17.3% 70.7% 70.7%' }}>
          <img alt="" className={styles.absImg} src={imgVector36} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'LinkedIn' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformLinkedInColorNegative} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Google' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformGoogleColorNegative} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'YouTube' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '14.82% 0 14.84% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector37} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Apple' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 7.43% 0 8.33%' }}>
          <img alt="" className={styles.absImg} src={imgVector38} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Pinterest' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformPinterestColorNegative} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Medium' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '25.29% 0 26.73% 90.08%' }}>
          <img alt="" className={styles.absImg} src={imgVector39} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '22.5% 12.65% 23.94% 59.14%' }}>
          <img alt="" className={styles.absImg} src={imgVector40} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '20.83% 43.59% 22.27% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector41} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Github' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 0 1.67% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector42} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Threads' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 7.2% 0 6.77%' }}>
          <img alt="" className={styles.absImg} src={imgVector43} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'WhatsApp' && color === 'Negative') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 0.48% 0 0' }}>
          <img alt="" className={styles.absImg} src={imgVector44} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Figma' && color === 'Negative') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 16%' }}>
          <img alt="" className={styles.absImg} src={imgVector45} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Dribbble' && color === 'Negative') {
    return (
      <SocialIconRoot {...common}>
        <img alt="" className={styles.absImg} src={imgPlatformDribbbleColorNegative} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Discord' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '11% 0 12.78% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector46} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'TikTok' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 6.25% 0 8.33%' }}>
          <img alt="" className={styles.absImg} src={imgVector47} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Tumblr' && color === 'Negative') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 22.5% 0 20.83%' }}>
          <img alt="" className={styles.absImg} src={imgVector48} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Telegram' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <img alt="" className={styles.absImg} src={imgPlatformTelegramColorNegative} draggable={false} />
      </SocialIconRoot>
    );
  }
  if (platform === 'Bluesky' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '6.83% 1.67% 6.85% 1.67%' }}>
          <img alt="" className={styles.absImg} src={imgVector49} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Spotify' && color === 'Negative') {
    return (
      <SocialIconRoot {...common}>
        <div className={styles.layer} style={{ inset: '0 0.31% 0.31% 0' }}>
          <img alt="" className={styles.absImg} src={imgVector50} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Twitch' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow>
        <div className={styles.layer} style={{ inset: '0 7.14% 0 7.15%' }}>
          <img alt="" className={styles.absImg} src={imgVector51} draggable={false} />
        </div>
        <div className={styles.layer} style={{ top: '19.64%', right: '25%', bottom: '58.93%', left: '67.86%' }}>
          <img alt="" className={styles.absImg} src={imgVector52} draggable={false} />
        </div>
        <div className={styles.layer} style={{ inset: '19.64% 44.64% 58.93% 48.22%' }}>
          <img alt="" className={styles.absImg} src={imgVector53} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  if (platform === 'Messenger' && color === 'Negative') {
    return (
      <SocialIconRoot {...common} overflow messenger>
        <div className={styles.layer} style={{ inset: '0.2%' }}>
          <img alt="" className={styles.absImg} src={imgVector54} draggable={false} />
        </div>
      </SocialIconRoot>
    );
  }
  return (
    <SocialIconRoot {...common} overflow>
      <div className={styles.layer} style={{ inset: '0 0 0.37% 0' }}>
        <img alt="" className={styles.absImg} src={imgC} draggable={false} />
      </div>
      <div className={styles.layer} style={{ inset: '18.51% 26.8% 0 27.61%' }}>
        <img alt="" className={styles.absImg} src={imgD} draggable={false} />
      </div>
    </SocialIconRoot>
  );
}

/**
 * @param {object} p
 * @param {string} [p.className]
 * @param {boolean} [p.hasExplicitSize]
 * @param {boolean} [p.overflow]
 * @param {boolean} [p.messenger]
 * @param {import('react').CSSProperties} [p.rootStyle]
 * @param {string} [p.ariaLabel]
 * @param {string} [p.title]
 * @param {import('react').ReactNode} p.children
 */
function SocialIconRoot({
  className,
  hasExplicitSize,
  rootStyle,
  overflow,
  messenger,
  ariaLabel,
  title,
  children,
}) {
  const label = ariaLabel ?? title;
  return (
    <div
      className={cx(
        styles.root,
        className,
        overflow && styles.overflow,
        !hasExplicitSize && !messenger && styles.defaultSize,
        !hasExplicitSize && messenger && styles.messengerRoot,
      )}
      style={rootStyle}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      title={title}
    >
      {children}
    </div>
  );
}

/** Figma 畫板列順序：先兩列 Original，再兩列 Negative */
export const SOCIAL_ICON_PLATFORMS_ROW1 = [
  'Facebook',
  'X (Twitter)',
  'Instagram',
  'LinkedIn',
  'Google',
  'YouTube',
  'Apple',
  'Pinterest',
  'Medium',
  'Github',
  'Threads',
];

export const SOCIAL_ICON_PLATFORMS_ROW2 = [
  'WhatsApp',
  'Figma',
  'Dribbble',
  'Discord',
  'TikTok',
  'Tumblr',
  'Telegram',
  'Bluesky',
  'Spotify',
  'Twitch',
  'Messenger',
];
