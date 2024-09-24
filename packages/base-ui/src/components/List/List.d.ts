import React from "react";

export type ListType = "ul" | "ol";

export interface ListProps<T extends ListType> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  wrap?: boolean;
  direction?: "horizontal" | "vertical";
  ref?: React.ForwardedRef<RefListType<T>>;
}

export type RefListType<T extends ListType> = T extends "ul"
  ? React.HTMLUListElement
  : React.HTMLOListElement;

export const List: <T extends ListType = "ul">(
  props: ListProps<T>
) => React.ReactElement;

export default List;
