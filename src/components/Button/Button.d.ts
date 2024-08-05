declare module 'button-component' {
    import { FC, ReactNode } from 'react';
  
    interface ButtonProps {
      onClick: () => void;
      children: ReactNode;
    }
  
    const Button: FC<ButtonProps>;
  
    export default Button;
  }
  