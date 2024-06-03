import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button' | 'submit';
  onClick?: () => void;
  className: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
