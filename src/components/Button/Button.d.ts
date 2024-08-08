import { FC, ReactNode } from 'react';

export type Variant = 'primary' | 'secondary';
export type Size = 'small' | 'medium' | 'large';

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  onClick: () => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps>;
export default Button;