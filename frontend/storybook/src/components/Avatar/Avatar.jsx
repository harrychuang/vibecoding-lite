import PropTypes from 'prop-types';

export function Avatar({ src, alt = '', size = 'md' }) {
  const sizes = {
    sm: 40,
    md: 80,
    lg: 120,
  };

  const dimension = sizes[size] || sizes.md;

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
