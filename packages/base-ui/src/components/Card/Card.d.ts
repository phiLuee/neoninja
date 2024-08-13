declare module 'card-component' {
    import { FC, ReactNode } from 'react';
  
    interface CardProps {
      onClick: () => void;
      children: ReactNode;
    }
  
    const Card: FC<CardProps>;
  
    export default Card;
  }
  