declare module 'button-component' {
  import { FC, ReactNode } from 'react';

  type Variant = 'primary' | 'secondary';
  type Size = 'small' | 'medium' | 'large';

  interface ButtonProps {
    variant?: Variant;
    size?: Size;
    onClick: () => void;
    children: ReactNode;
  }

  const Button: FC<ButtonProps>;

  export default Button;
}
