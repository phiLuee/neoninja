import React from "react";

export type ModalHandle = {
  element: HTMLElement;
  setVisibile: (visible: boolean) => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<
  React.HTMLProps<HTMLDivElement> & React.RefAttributes<ModalHandle>
>;
export default Modal;
