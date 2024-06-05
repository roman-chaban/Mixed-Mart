import { ChangeEvent, FC } from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  name?: string;
  className: string;
  id?: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  id,
  name,
  setValue,
  type,
  value,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={setValue}
      className={className}
    />
  );
};
