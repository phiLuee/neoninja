import { FC, ReactNode } from "react";
export interface NavbarProps {
  children: ReactNode;
  subnavContent?: ReactNode;
  as?: React.ElementType;
  className?: string;
}

export interface NavbarHandle {
  element: HTMLElement;
  setSubnavContent: (content: React.ReactNode) => void;
  isSubnavOpen: boolean;
  toggle: () => void;
}

// export type NavbarHandle = {
//   element: HTMLElement;
//   setSubnavContent: (content: React.ReactNode) => void;
//   isSubnavOpen: boolean;
//   toggle: () => void;
// };

export const Navbar: FC<NavbarProps & React.RefAttributes<NavbarHandle>>;
export default Navbar;
