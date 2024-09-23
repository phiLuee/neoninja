import { ElementType, forwardRef } from "react";
import clsx from "clsx";
import "./ButtonBase.scss";
import { ButtonBaseProps } from "./ButtonBase.d";

export const ButtonBase = forwardRef<HTMLElement, ButtonBaseProps<ElementType>>(
  <T extends ElementType = "button">(
    {
      as: Component = "button" as T,
      onClick,
      children,
      disabled = false,
      LinkComponent = "a",
      type = "button",
      ...other
    }: ButtonBaseProps<T>,
    ref: React.Ref<HTMLElement>
  ) => {
    const baseStyles = "button dark:text-white ";
    const isLink = other.href || other.to;
    const buttonProps: { type?: string; disabled?: boolean } = {};

    let ButtonBaseRoot: ElementType = Component;

    if (ButtonBaseRoot === "button") {
      if (isLink) ButtonBaseRoot = LinkComponent;
      else {
        buttonProps.type = type;
        buttonProps.disabled = disabled;
      }
    }

    const classes = clsx(baseStyles, "button-no-flex");
    return (
      <ButtonBaseRoot
        onClick={onClick}
        className={classes}
        ref={ref}
        {...buttonProps}
      >
        {children}
      </ButtonBaseRoot>
    );
  }
);

export default ButtonBase;
