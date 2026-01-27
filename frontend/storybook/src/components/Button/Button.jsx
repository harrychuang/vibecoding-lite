export function Button({ children, variant = 'primary', onClick }) {
  const styles = {
    primary: { background: '#007bff', color: '#fff' },
    secondary: { background: '#6c757d', color: '#fff' },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}
