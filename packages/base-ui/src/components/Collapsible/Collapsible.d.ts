export interface CollapsibleProps {
  children: React.ReactNode;
  as?: React.ElementType;
  inProp?: boolean;
  onToggle?: (inProp: boolean) => void;
  className?: string;
}

export const Collapsible: FC<CollapsibleProps>;
export default Collapsible;
