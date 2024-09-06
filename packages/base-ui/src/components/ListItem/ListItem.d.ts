export interface ListItemProps {
  className?: string; // Optional className prop for styling
  children?: React.ReactNode; // Optional children prop for submenu
}

export const ListItem: React.FC<ListItemProps>;

export default ListItem;
