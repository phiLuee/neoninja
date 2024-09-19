import { useCallback, useEffect, ForwardedRef } from "react";
import { NavbarHandle } from "./Navbar.d";

export const useNavbarLogic = (ref: ForwardedRef<NavbarHandle>): void => {
  //   const [isSubnavOpen, setIsSubnavOpen] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        ref &&
        "current" in ref &&
        ref.current?.element &&
        ref.current?.isSubnavOpen &&
        !ref.current.element.contains(event.target as Node)
      ) {
        console.log("handleClickOutside");
        ref.current.toggle();
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  //   const toggleMenu = useCallback(() => {
  //     if (submenuRef.current) {
  //       submenuRef.current.toggle();
  //       setIsSubnavOpen(submenuRef.current.isOpen);
  //     }
  //   }, [submenuRef]);

  //   useEffect(() => {
  //     if (ref && typeof ref !== "function" && ref.current) {
  //       ref.current.toggle = toggleMenu;
  //       ref.current.isSubnavOpen = isSubnavOpen;
  //     }
  //   }, [ref, toggleMenu, isSubnavOpen]);

  // Synchronisieren Sie den Zustand des Submenus mit dem Zustand des Collapsibles
  //   useEffect(() => {
  //     if (submenuRef.current) {
  //       submenuRef.current.setOpen;
  //       //   setIsSubnavOpen(submenuRef.current.isOpen);
  //     }
  //   }, [submenuRef]);
};

// const [clicked, setClicked] = useState(false);
// const timeoutRef = useRef<NodeJS.Timeout | null>(null);

// const handleClick = () => {
//   setClicked(true);
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//   }
// };

// const handleMouseLeave = () => {
//   if (clicked) {
//     timeoutRef.current = setTimeout(() => {
//       // Hier die gewünschte Aktion ausführen
//       submenuRef.current?.toggle();
//       setClicked(false);
//     }, 3000); // Verzögerung in Millisekunden
//   }
// };

// const handleMouseEnter = () => {
//   if (timeoutRef.current) {
//     clearTimeout(timeoutRef.current);
//     setClicked(false);
//   }
// };

// useEffect(() => {
//   return () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };
// }, []);
