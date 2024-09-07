import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
  useState,
} from "react";
import clsx from "clsx";
import "./Collapsible.scss";
import { CollapsibleProps, CollapsibleHandle } from "./Collapsible.d";

const updateContainer = (container: HTMLElement | null, inProp: boolean) => {
  if (!container) return;
  container.style.height = `${container.scrollHeight}px`;

  if (!inProp) {
    requestAnimationFrame(() => {
      container.style.height = "0px";
    });
  }
};

const handleTransitionEnd = (
  event: React.TransitionEvent<HTMLDivElement>,
  contentRef: React.RefObject<HTMLElement>
) => {
  event.stopPropagation();
  const container = contentRef.current?.querySelector(
    ".collapsible__container"
  ) as HTMLElement;
  if (container) {
    container.classList.toggle("collapsible__container--open");
    container.style.removeProperty("height");
  }
};

export const Collapsible = forwardRef<CollapsibleHandle, CollapsibleProps>(
  ({ children, as: Component = "div", inProp = false, className }, ref) => {
    const [open, toggleOpen] = useState(inProp || false);
    const contentRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
      element: contentRef.current as HTMLElement,
      toggle: () => {
        toggleOpen(!open);
      },
    }));

    useLayoutEffect(() => {
      const container = contentRef.current?.querySelector(
        ".collapsible__container"
      ) as HTMLElement;
      updateContainer(container, open);
    }, [open]);

    const handleTransitionEndCallback = useCallback(
      (event: React.TransitionEvent<HTMLDivElement>) =>
        handleTransitionEnd(event, contentRef),
      []
    );

    return (
      <Component ref={contentRef} className={clsx("collapsible", className)}>
        <div
          onTransitionEnd={handleTransitionEndCallback}
          className="collapsible__container"
        >
          <div className="collapsible__content">{children}</div>
        </div>
      </Component>
    );
  }
);

export default Collapsible;
