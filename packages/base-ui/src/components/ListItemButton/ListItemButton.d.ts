import React from "react";
import { ExtendedProps, ExtendableComponentType } from "../../types/types.d";

export type ListItemButtonProps<T extends ExtendableComponentType> = {
  alignItems?: "center";
  href?: string;
  children?: React.ReactNode;
  className?: string;
} & ExtendedProps<T>;

export const ListItemButton: <T extends ExtendableComponentType = "button">(
  props: ListItemButtonProps<T>
) => JSX.Element;

export default ListItemButton;
