import { ChangeEvent, FC } from 'react';

interface TextAreaProps {
  name: string;
  id?: string;
  className: string;
  placeholder: string;
  value: string;
  setValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: FC<TextAreaProps> = ({
  id,
  name,
  setValue,
  value,
  className,
  placeholder,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={setValue}
      className={className}
    />
  );
};
