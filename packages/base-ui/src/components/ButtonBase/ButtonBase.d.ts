import { ReactNode, ElementType } from "react";
import { ExtendedProps, ExtendableComponentType } from "../../types/types.d";

export type ButtonBaseProps<T extends ExtendableComponentType = "button"> = {
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  LinkComponent?: ElementType;
  href?: string;
  type?: "button" | "reset" | "submit";
} & ExtendedProps<T>;

export const ButtonBase: <T extends ExtendableComponentType = "button">(
  props: ButtonBaseProps<T>
) => JSX.Element;
export default ButtonBase;
