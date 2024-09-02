import React from "react";
import clsx from "clsx";
import "./Button.scss";
import { ButtonProps } from "./Button.d";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  theme = "dark",
  onClick,
  children,
}) => {
  const baseStyles =
    "button dark:text-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 ";
  const variantStyles = {
    primary: "button-primary",
    secondary: "button-secondary",
  };
  const glassStyle = {
    glass: "backdrop-filter backdrop-blur-lg bg-opacity-30",
  };
  const sizeStyles = {
    xsmall: "text-xs",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
    xlarge: "text-xl",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    theme ? glassStyle.glass : {},
    "button-no-flex"
  );
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
