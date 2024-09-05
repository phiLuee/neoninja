import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
} from "react";
import "./Collapsible.scss";

import { CollapsibleProps } from "./Collapsible.d";
import clsx from "clsx";

export const Collapsible = forwardRef<HTMLElement, CollapsibleProps>(
  ({ children, as: Component = "div", inProp = false, className }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => contentRef.current as HTMLElement);

    useLayoutEffect(() => {
      if (!contentRef.current) return;

      const container = contentRef.current.querySelector(
        ".collapsible__container"
      ) as HTMLElement;
      container.style.height = `${container.scrollHeight}px`;
      if (!inProp) {
        requestAnimationFrame(() => {
          if (container) {
            container.style.height = "0px";
          }
        });
      }
    }, [inProp]);

    const handleTransitionEnd = useCallback(
      (event: React.TransitionEvent<HTMLDivElement>) => {
        // Alternative:
        // if (event.target !== event.currentTarget) return;
        event.stopPropagation();

        if (contentRef.current) {
          const container = contentRef.current.querySelector(
            ".collapsible__container"
          ) as HTMLElement;
          container.classList.toggle("collapsible__container--open");
          container.style.removeProperty("height");
        }
      },
      [inProp]
    );

    return (
      <Component ref={contentRef} className={clsx("collapsible", className)}>
        <div
          onTransitionEnd={handleTransitionEnd}
          className="collapsible__container"
        >
          <div className="collapsible__content">{children}</div>
        </div>
      </Component>
    );
  }
);

export default Collapsible;
