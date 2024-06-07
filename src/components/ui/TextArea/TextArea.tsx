import { FC, ChangeEvent } from 'react';

interface TextAreaProps {
  className: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  className,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <textarea
    className={className}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);
