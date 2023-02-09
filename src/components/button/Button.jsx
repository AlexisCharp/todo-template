import './Button.css';

export const Button = ({
  'aria-label': ariaLabel,
  children,
  type,
  variant = null,
  noPadding = false,
  onClick,
}) => {
  const classNames = `${noPadding ? 'button--no-padding' : ''} ${
    variant === 'danger' ? 'button--danger' : ''
  }`;
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
