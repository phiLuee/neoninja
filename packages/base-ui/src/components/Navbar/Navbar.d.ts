import { FC, ReactNode } from "react";
export interface NavbarProps {
  children: ReactNode;
  as?: React.ElementType;
  className?: string;
}

export type NavbarHandle = {
  element: HTMLElement;
  toggle: () => void;
};

export const Navbar: FC<NavbarProps & React.RefAttributes<NavbarHandle>>;
export default Navbar;
