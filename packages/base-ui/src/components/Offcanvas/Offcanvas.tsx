import { forwardRef } from "react";
import { OffcanvasProps } from "./Offcanvas.d";
import "./Offcanvas.scss";
import clsx from "clsx";

export const Offcanvas = forwardRef<HTMLDivElement, OffcanvasProps>(
  ({ children, placement = "right", show = false }, ref) => {
    const baseStyles =
      "offcanvas backdrop-blur-lg fixed z-40 h-screen p-4 overflow-y-auto transition-transform bg-white/30 w-80 dark:bg-gray-800/30";

    const placementStyles = {
      top: "transform -translate-y-full",
      right: "transform translate-x-full top-0 right-0",
      bottom: "transform translate-y-full",
      left: "transform -translate-x-full top-0 left-0",
    };

    const visibilityStyles = show ? "transform-none" : "";

    const classes = clsx(
      baseStyles,
      placementStyles[placement],
      visibilityStyles
    );

    return (
      <>
        <div
          ref={ref}
          id="drawer-example"
          className={classes}
          aria-labelledby="drawer-label"
        >
          {children}
        </div>
      </>
    );
  }
);

export default Offcanvas;
