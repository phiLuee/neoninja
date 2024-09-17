import React from "react";
export type ListType = "ul" | "ol";

export interface ListProps<T extends ListType> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  wrap?: boolean;
  direction?: "horizontal" | "vertical";
}

export type RefListType<T extends ListType> = T extends "ul"
  ? HTMLUListElement
  : HTMLOListElement;

export const List: <T extends ListType = "ul">(
  props: ListProps<T>,
  ref: React.ForwardedRef<RefType<T>>
) => React.ReactElement;

export default List;
