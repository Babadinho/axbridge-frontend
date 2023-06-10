interface ButtonProps {
  label: string | JSX.Element;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({
  label,
  fullWidth,
  onClick,
  large,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${fullWidth ? 'button__full' : 'button__fit'} ${
        large ? 'button__large' : 'button__medium'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
