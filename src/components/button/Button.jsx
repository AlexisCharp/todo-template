import './Button.css';

export const Button = ({ children, noPadding, type, variant, onClick }) => {
  const classNames = `${noPadding ? 'button--no-padding' : ''} ${
    variant === 'danger' ? 'button--danger' : ''
  }`;

  return (
    <button className={classNames} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
