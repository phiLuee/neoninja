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
  children: React.ReactNode;
  as?: ElementType;
  inProp?: boolean;
  onToggle?: (inProp: boolean) => void;
  className?: string;
}

export const Collapsible: FC<CollapsibleProps>;
export default Collapsible;
