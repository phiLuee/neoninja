export interface MenuItemProps {
  label?: string;
  to?: string;
  className?: string; // Optional className prop for styling
  children?: React.ReactNode; // Optional children prop for submenu
  subFixed?: boolean;
}

export const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
