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
