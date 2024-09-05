import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
} from "react";
import "./Collapsible.scss";

import { CollapsibleProps } from "./Collapsible.d";

export const Collapsible = forwardRef<HTMLElement, CollapsibleProps>(
  ({ children, as: Component = "div", inProp = false, className }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => contentRef.current as HTMLElement);

    useLayoutEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        if (!inProp) {
          requestAnimationFrame(() => {
            if (contentRef.current) {
              contentRef.current.style.height = "0px";
            }
          });
        }
      }
    }, [inProp]);

    const handleTransitionEnd = useCallback(() => {
      if (contentRef.current && inProp) {
        contentRef.current.style.height = "auto";
      }
    }, [inProp]);

    return (
      <Component
        ref={contentRef}
        className={`collapsible collapsible__container ${className || ""} ${inProp ? "open" : ""}`.trim()}
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </Component>
    );
  }
);

export default Collapsible;
