import { RefObject, useCallback, useEffect } from "react";
import { NavbarHandle } from "./Navbar.d";

export const useNavbarLogic = (ref: RefObject<NavbarHandle>): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        ref.current?.element &&
        ref.current?.isSubnavOpen &&
        !ref.current.element.contains(event.target as Node)
      ) {
        console.log(ref.current);
        ref.current.toggle();
      }
    },
    [ref]
  );

  useEffect(() => {
    if (ref.current?.isSubnavOpen) {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [handleClickOutside, ref, ref.current?.isSubnavOpen]);
};
