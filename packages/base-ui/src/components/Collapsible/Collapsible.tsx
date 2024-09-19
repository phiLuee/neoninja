import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  ElementType,
} from "react";
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
 * @param {React.ElementType} [props.as="div"] - The HTML element or custom component to render as the root element.
 * @param {boolean} [props.inProp=false] - Initial state of the collapsible component, whether it is open or closed.
 * @param {string} [props.className] - Additional class names to apply to the root element.
 * @param {React.Ref<CollapsibleHandle>} ref - A ref to access the collapsible component's imperative handle.
 *
 * @returns {JSX.Element} The rendered collapsible component.
 *
 * @example
 * ```tsx
 * const collapsibleRef = useRef<CollapsibleHandle>(null);
 *
 * return (
 *   <Collapsible ref={collapsibleRef} inProp={true} className="my-collapsible">
 *     <p>This is some collapsible content.</p>
 *   </Collapsible>
 * );
 * ```
 *
 * @typedef {Object} CollapsibleHandle
 * @property {HTMLElement} element - The root element of the collapsible component.
 * @property {() => void} toggle - Function to toggle the open state of the collapsible component.
 *
 * @typedef {Object} CollapsibleProps
 * @property {React.ReactNode} children - The content to be displayed inside the collapsible component.
 * @property {React.ElementType} [as] - The HTML element or custom component to render as the root element.
 * @property {boolean} [inProp] - Initial state of the collapsible component, whether it is open or closed.
 * @property {string} [className] - Additional class names to apply to the root element.
 */
export const Collapsible = forwardRef<
  CollapsibleHandle,
  CollapsibleProps<ElementType>
>(function Collapsible<T extends ElementType = "div">(
  {
    children,
    as: Component = "div" as T,
    open = false,
    className,
    ...rest
  }: CollapsibleProps<T>,
  ref: React.Ref<CollapsibleHandle>
): React.ReactElement {
  const [isOpen, setOpen] = useState(open);
  const contentRef = useRef<HTMLElement>(null);

  const toggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  useImperativeHandle(ref, () => ({
    element: contentRef.current as HTMLElement,
    isOpen,
    setOpen,
    toggle,
  }));

  const handleTransitionEndCallback = useCollapsibleLogic(contentRef, isOpen);

  const ComponentType = Component as React.ElementType;

  return (
    <ComponentType
      ref={contentRef}
      className={clsx("collapsible", className)}
      {...rest}
    >
      <div
        onTransitionEnd={handleTransitionEndCallback}
        className="collapsible__container"
      >
        <div className="collapsible__content">{children}</div>
      </div>
    </ComponentType>
  );
});

export default Collapsible;
