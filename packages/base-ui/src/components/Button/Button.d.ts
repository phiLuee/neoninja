import { FC, ReactNode } from "react";

export type Variant = "primary" | "secondary";
export type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type Theme = "light" | "dark";

export interface ButtonProps {
  variant?: Variant;
  size?: Size;
  theme?: Theme;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps>;
export default Button;
