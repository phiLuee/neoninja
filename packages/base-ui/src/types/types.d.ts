import React from "react";

// Define a type for any valid JSX element or component
export type ExtendableComponentType =
  | keyof JSX.IntrinsicElements
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.JSXElementConstructor<any>;

// Get the props of a given tag or component type
type ComponentProps<T extends ExtendableComponentType> =
  T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : T extends React.JSXElementConstructor<infer P>
      ? P
      : never;

// Define a type to validate props by omitting the 'as' prop
export type ExtendedProps<Tag extends ExtendableComponentType> =
  ComponentProps<Tag> & {
    as?: Tag; // Include 'as' prop in validated props
  };
