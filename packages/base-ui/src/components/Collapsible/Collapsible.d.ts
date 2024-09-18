import React from "react";

interface CollapsiblePropsBase<T extends React.ElementType = "div"> {
  children: React.ReactNode;
  as?: T;
  inProp?: boolean;
  className?: string;
}

export interface CollapsibleProps<T extends React.ElementType>
  extends CollapsiblePropsBase<T>,
    Omit<React.HTMLProps<T>, keyof CollapsiblePropsBase<T>> {}

export type CollapsibleHandle = {
  element: HTMLElement;
  toggle: () => void;
  isOpen: boolean;
};

export const Collapsible: <T extends React.ElementType = "div">(
  props: CollapsibleProps<T> & React.RefAttributes<CollapsibleHandle>
) => React.ReactElement;

export default Collapsible;
