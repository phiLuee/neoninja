import { FC, ReactNode } from "react";
export interface CardProps {
  onClick: () => void;
  children: ReactNode;
}

export const Card: FC<CardProps>;
export default Card;
