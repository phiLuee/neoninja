import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
} from "react";
import clsx from "clsx";
import "./Collapsible.scss";
import { CollapsibleProps } from "./Collapsible.d";

const setContainerHeight = (container: HTMLElement, height: string) => {
  if (container) {
    container.style.height = height;
  }
};

const handleOpenClose = (container: HTMLElement | null, inProp: boolean) => {
  if (!container) return;
  container.style.height = `${container.scrollHeight}px`;

  if (!inProp) {
    requestAnimationFrame(() => setContainerHeight(container, "0px"));
  }
};

export const Collapsible = forwardRef<HTMLElement, CollapsibleProps>(
  ({ children, as: Component = "div", inProp = false, className }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => contentRef.current as HTMLElement);

    useLayoutEffect(() => {
      const container = contentRef.current?.querySelector(
        ".collapsible__container"
      ) as HTMLElement;
      handleOpenClose(container, inProp);
    }, [inProp]);

    const handleTransitionEnd = useCallback(
      (event: React.TransitionEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const container = contentRef.current?.querySelector(
          ".collapsible__container"
        ) as HTMLElement;
        if (container) {
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
