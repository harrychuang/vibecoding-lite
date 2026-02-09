import PropTypes from 'prop-types';

const HeartIcon = ({ filled }) => (
  <svg
    width="24"
    height="24"
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

HeartIcon.propTypes = {
  filled: PropTypes.bool,
};

export function LikeButton({ liked = false, onClick, label = 'Like' }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '0',
        backgroundColor: 'transparent',
        color: '#000000',
        border: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
    >
      <HeartIcon filled={liked} />
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
        }}
      >
        {label}
      </span>
    </button>
  );
}

LikeButton.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};
