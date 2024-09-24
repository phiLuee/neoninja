import { FC, RefAttributes } from "react";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase.d";

export type Variant = "primary" | "secondary";
export type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type Theme = "light" | "dark";

export interface ButtonProps extends Omit<ButtonBaseProps, "ref"> {
  variant?: Variant;
  size?: Size;
  theme?: Theme;
}

export const Button: FC<ButtonProps & RefAttributes<HTMLElement>>;
export default Button;
