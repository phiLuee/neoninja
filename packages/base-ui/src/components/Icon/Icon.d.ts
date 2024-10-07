import React from "react";

export type IconProps = {
  className?: string;
  iconSize?: "icon-small" | "icon-medium" | "icon-large";
} & React.HTMLAttributes<HTMLImageElement>;

export const Icon: React.FC<IconProps & React.RefAttributes<HTMLImageElement>>;

export default Icon;
