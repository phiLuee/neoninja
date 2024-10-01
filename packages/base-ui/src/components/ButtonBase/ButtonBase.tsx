import { ElementType, forwardRef } from "react";
import clsx from "clsx";
import "./ButtonBase.scss";
import { ButtonBaseProps } from "./ButtonBase.d";
import { ExtendableComponentType } from "../../types/types.d";

export const ButtonBase = forwardRef<HTMLElement, ButtonBaseProps<ElementType>>(
  (
    {
      as: Component = "button",
      onClick,
      children,
      disabled = false,
      LinkComponent = "a",
      type = "button",
      ...other
    }: ButtonBaseProps<ElementType>,
    ref
  ) => {
    const baseStyles = "dark:text-white dark:hover:text-blue-500 duration-300";
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

    const classes = clsx(baseStyles);
    return (
      <ButtonBaseRoot
        onClick={onClick}
        className={classes}
        ref={ref}
        {...buttonProps}
        {...other}
      >
        {children}
      </ButtonBaseRoot>
    );
  }
) as <Tag extends ExtendableComponentType = "button">(
  props: ButtonBaseProps<Tag>
) => JSX.Element;

export default ButtonBase;
