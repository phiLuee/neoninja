import { ElementType } from "react";

export interface ButtonBaseProps<T extends ElementType> {
  as?: T;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  LinkComponent?: ElementType;
  to?: string;
  href?: string;
  type?: "button" | "reset" | "submit";
}
export const ButtonBase: React.FC<ButtonBaseProps>;
export default ButtonBase;
