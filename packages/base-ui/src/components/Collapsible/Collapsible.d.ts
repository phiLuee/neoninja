import React from "react";

export interface CollapsibleProps {
  children: React.ReactNode;
  as?: React.ElementType;
  inProp?: boolean;
  onToggle?: (inProp: boolean) => void;
  className?: string;
  ref?: React.Ref<HTMLElement>;
}

export type CollapsibleHandle = {
  element: HTMLElement;
  toggle: () => void;
  isOpen: boolean;
};

export const Collapsible: FC<
  CollapsibleProps & RefAttributes<CollapsibleHandle>
>;
export default Collapsible;
