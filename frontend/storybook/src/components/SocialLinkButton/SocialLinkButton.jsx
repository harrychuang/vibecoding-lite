import PropTypes from 'prop-types';

const icons = {
  instagram: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="12" stroke="white" strokeWidth="3"/>
      <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="3"/>
      <circle cx="36" cy="12" r="3" fill="white"/>
    </svg>
  ),
  medium: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="14" cy="24" rx="10" ry="12" fill="white"/>
      <ellipse cx="30" cy="24" rx="5" ry="11" fill="white"/>
      <ellipse cx="42" cy="24" rx="2" ry="10" fill="white"/>
    </svg>
  ),
  linkedin: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="4" stroke="white" strokeWidth="3"/>
      <path d="M14 20V34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="3" fill="white"/>
      <path d="M22 34V26C22 22.6863 24.6863 20 28 20C31.3137 20 34 22.6863 34 26V34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M22 20V34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
};

export function SocialLinkButton({ platform, label, href, onClick }) {
  const icon = icons[platform];

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      {...linkProps}
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '400px',
        height: '69px',
        padding: '20px 40px',
        backgroundColor: '#000000',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {icon}
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
        }}
      >
        {label || platform.charAt(0).toUpperCase() + platform.slice(1)}
      </span>
    </Component>
  );
}

SocialLinkButton.propTypes = {
  platform: PropTypes.oneOf(['instagram', 'medium', 'linkedin']).isRequired,
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
