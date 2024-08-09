import React from "react";
import clsx from "clsx";
import "./Button.scss";
import { ButtonProps } from "./Button.d";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  glass = true,
  onClick,
  children,
}) => {
  const baseStyles =
    "button p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
  };
  const glassStyle = {
    glass: "backdrop-filter backdrop-blur-lg bg-opacity-30",
  };
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    glass ? glassStyle.glass : {}
  );
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
