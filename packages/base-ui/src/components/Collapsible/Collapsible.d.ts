import React, { FC } from "react";

export interface CollapsibleProps {
  children: React.ReactNode;
  as?: React.ElementType;
  inProp?: boolean;
  onToggle?: (inProp: boolean) => void;
  className?: string;
}

export type CollapsibleHandle = {
  element: HTMLElement;
  toggle: () => void;
  isOpen: boolean;
};

export const Collapsible: FC<
  CollapsibleProps & React.RefAttributes<CollapsibleHandle>
>;
export default Collapsible;
