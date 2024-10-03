import { forwardRef } from "react";
import clsx from "clsx";
import "./Button.scss";
import { ButtonBase } from "../ButtonBase/ButtonBase";
import { ButtonProps } from "./Button.d";

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      theme = "dark",
      onClick,
      children,
      disabled = false,
      className,
      ...other
    },
    ref
  ) => {
    const baseStyles =
      "button shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 ";
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
      className,
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      theme ? glassStyle.glass : {},
      "button-no-flex"
    );

    return (
      <ButtonBase
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...other}
      >
        {children}
      </ButtonBase>
    );
  }
);

export default Button;
