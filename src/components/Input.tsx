import { ReactElement } from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: ReactElement;
}

const Input = ({
  placeholder,
  value,
  type = 'text',
  onChange,
  disabled,
  label,
  icon,
}: InputProps) => {
  return (
    <div className='input'>
      {label && <p className='input__label'>{label}</p>}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className='input__box'
      />
      <span className='input__icon'>{icon}</span>
    </div>
  );
};

export default Input;
