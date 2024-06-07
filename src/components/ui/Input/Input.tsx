import { FC, ChangeEvent } from 'react';

interface InputProps {
  className: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
}) => (
  <input
    className={className}
    placeholder={placeholder}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
  />
);
