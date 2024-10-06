import React from "react";

export type ListItemIconProps = {
  alignItems?: "center";
  href?: string;
  children?: React.ReactNode;
  className?: string;
  iconSize?: "icon-small" | "icon-medium" | "icon-large";
} & React.HTMLAttributes<HTMLImageElement>;

export const ListItemIcon: React.FC<
  ListItemIconProps & React.RefAttributes<HTMLImageElement>
>;

export default ListItemIcon;
