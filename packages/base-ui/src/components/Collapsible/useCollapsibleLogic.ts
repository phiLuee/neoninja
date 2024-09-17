import { useCallback, useEffect, useLayoutEffect } from "react";

/**
 * Custom hook to manage the logic for a collapsible component.
 *
 * @param contentRef - A reference to the HTML element containing the collapsible content.
 * @param open - A boolean indicating whether the collapsible content is open or closed. Defaults to `false`.
 * @returns A callback function to handle the transition end event.
 *
 * This hook sets the height of the collapsible container based on its scroll height when the component mounts or updates.
 * If the `open` parameter is `false`, it sets the height to `0px` to collapse the content.
 * The returned callback function toggles the `collapsible__container--open` class and removes the height style property
 * when the transition ends.
 */
export const useCollapsibleLogic = (
  contentRef: React.RefObject<HTMLElement>,
  open: boolean = false,
  setOpen: (open: boolean) => void
): React.TransitionEventHandler<HTMLDivElement> => {
  useLayoutEffect(() => {
    const container = contentRef.current?.querySelector(
      ".collapsible__container"
    ) as HTMLElement | null;
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
      ) as HTMLElement | null;
      if (!container) return;

      event.stopPropagation();
      container.classList.toggle("collapsible__container--open", open);
      container.style.removeProperty("height");
    },
    [contentRef, open]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    },
    [contentRef, setOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return handleTransitionEnd;
};

export default useCollapsibleLogic;
