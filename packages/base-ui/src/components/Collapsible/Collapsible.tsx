import { useState, useRef, useEffect, forwardRef, Ref } from "react";
import "./Collapsible.scss";

import { CollapsibleProps } from "./Collapsible.d";

export const Collapsible = forwardRef<HTMLElement, CollapsibleProps>(
  (
    {
      label,
      children,
      as: Component = "div",
      isOpen: controlledIsOpen,
      className,
      trigger,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(controlledIsOpen || false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        if (!isOpen) {
          requestAnimationFrame(() => {
            if (contentRef.current) {
              contentRef.current.style.height = "0px";
            }
          });
        }
      }
    }, [isOpen]);

    const handleTransitionEnd = () => {
      if (contentRef.current && isOpen) {
        contentRef.current.style.height = "auto";
      }
    };

    return (
      <Component
        ref={ref as Ref<HTMLElement>}
        className={`collapsible ${className || ""}`.trim()}
      >
        <div onClick={toggle} className="collapsible__toggle">
          {trigger || label}
        </div>
        <div className="collapsible__container relative">
          <div
            ref={contentRef}
            onTransitionEnd={handleTransitionEnd}
            className={`collapsible__content ${isOpen ? "open" : ""}`}
          >
            {children}
          </div>
        </div>
      </Component>
    );
  }
);

export default Collapsible;
