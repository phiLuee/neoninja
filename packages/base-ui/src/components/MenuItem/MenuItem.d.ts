export interface MenuItemProps {
  label?: string;
  to?: string;
  children?: React.ReactNode; // Optional children prop for submenu
}

export const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
