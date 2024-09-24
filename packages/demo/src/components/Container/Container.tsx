import React from "react";
import clsx from "clsx";
import "./Container.scss";

export const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const defaultClassName = "container";

  const classes = clsx(defaultClassName, className);

  return <div className={classes}>{children}</div>;
};

export default Container;
