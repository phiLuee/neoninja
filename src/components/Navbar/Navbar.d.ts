declare module 'navbar-component' {
    import { FC, ReactNode } from 'react';
  
    interface NavbarProps {
      onClick: () => void;
      children: ReactNode;
    }
  
    const Navbar: FC<NavbarProps>;
  
    export default Navbar;
  }
  