import { forwardRef } from "react";
import "./Icon.scss";
import { IconProps } from "./Icon.d";
import clsx from "clsx";
import spriteImage from "./../../assets/images/css_sprites.png";

export const Icon = forwardRef<HTMLImageElement, IconProps>(function Icon(
  { className, role = "Icon", iconSize = "icon-medium", ...other }: IconProps,
  ref
) {
  // const childContext = useMemo(
  //   () => ({
  //     direction: context.direction || false,
  //     alignItems,
  //   }),
  //   [alignItems, context.direction]
  // );

  const classes = clsx("icon box-content", iconSize, className);

  return (
    <>
      <img
        ref={ref}
        className={classes}
        src={spriteImage}
        role={role}
        {...other}
      ></img>
    </>
  );
});

export default Icon;
