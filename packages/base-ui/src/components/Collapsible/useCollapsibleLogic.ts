import { useCallback, useLayoutEffect } from "react";

export const useCollapsibleLogic = (
  contentRef: React.RefObject<HTMLElement>,
  open: boolean = false
) => {
  useLayoutEffect(() => {
    const container = contentRef.current?.querySelector(
      ".collapsible__container"
    ) as HTMLElement;
    if (!container) return;
    container.style.height = `${container.scrollHeight}px`;

    if (!open) {
      requestAnimationFrame(() => {
        container.style.height = "0px";
      });
    }
  }, [contentRef, open]);

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      const container = contentRef.current?.querySelector(
        ".collapsible__container"
      ) as HTMLElement;
      if (container) {
        event.stopPropagation();
        container.classList.toggle("collapsible__container--open", open);
        container.style.removeProperty("height");
      }
    },
    [contentRef, open]
  );

  return handleTransitionEnd;
};

export default useCollapsibleLogic;
