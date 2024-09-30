import React, { ElementType } from "react";
import { ButtonBaseProps } from "../ButtonBase/ButtonBase.d";

export interface ListItemButtonProps<T extends ElementType>
  extends ButtonBaseProps<T> {
  alignItems?: "center";
  href?: string;
  to?: string;
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export const ListItemButton: React.FC<
  ListItemButtonProps & React.RefAttributes<HTMLElement>
>;

export default ListItemButton;
