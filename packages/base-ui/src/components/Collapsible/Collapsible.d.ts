import React, {
  useState,
  useRef,
  useEffect,
  ElementType,
  forwardRef,
  Ref,
  FC,
} from "react";

export interface CollapsibleProps {
  label?: string;
  children: React.ReactNode;
  as?: ElementType;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  className?: string;
  trigger?: React.ReactNode;
}

export const Collapsible: FC<CollapsibleProps>;
export default Collapsible;
