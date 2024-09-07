import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import clsx from "clsx";
import "./Collapsible.scss";
import { CollapsibleProps, CollapsibleHandle } from "./Collapsible.d";
import useCollapsibleLogic from "./useCollapsibleLogic";

/**
 * A collapsible component that can be toggled open or closed.
 *
 * @component
 * @param {CollapsibleProps} props - The properties for the Collapsible component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the collapsible component.
 * @param {React.ElementType} [props.as="div"] - The HTML element or custom component to be used as the container.
 * @param {boolean} [props.inProp=false] - Initial state of the collapsible component, whether it is open or closed.
 * @param {string} [props.className] - Additional class names to apply to the collapsible component.
 * @param {React.Ref<CollapsibleHandle>} ref - A ref object to access the collapsible component's imperative handle.
 *
 * @returns {JSX.Element} The rendered collapsible component.
 *
 * @example
 * ```tsx
 * const collapsibleRef = useRef<CollapsibleHandle>(null);
 *
 * return (
 *   <button onClick={() => collapsibleRef.current?.toggle()}>
 *   <Collapsible ref={collapsibleRef} inProp={true}>
 *     <p>This is some collapsible content.</p>
 *   </Collapsible>
 * );
 * ```
 *
 * @typedef {Object} CollapsibleHandle
 * @property {HTMLElement} element - The HTML element of the collapsible component.
 * @property {() => void} toggle - Function to toggle the open state of the collapsible component.
 *
 * @typedef {Object} CollapsibleProps
 * @property {React.ReactNode} children - The content to be displayed inside the collapsible component.
 * @property {React.ElementType} [as] - The HTML element or custom component to be used as the container.
 * @property {boolean} [inProp] - Initial state of the collapsible component, whether it is open or closed.
 * @property {string} [className] - Additional class names to apply to the collapsible component.
 */
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

    const handleTransitionEndCallback = useCollapsibleLogic(contentRef, open);

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
