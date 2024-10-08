import { FC, ReactNode } from "react";

export type Placement = "top" | "right" | "bottom" | "left";

export interface OffcanvasProps {
  children?: ReactNode;
  placement?: Placement;
  show?: boolean;
  type?: "fixed" | "absolute";
}

export const Offcanvas: FC<OffcanvasProps>;
export default Offcanvas;
