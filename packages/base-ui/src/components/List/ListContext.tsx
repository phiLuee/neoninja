import { createContext } from "react";

export const ListContext = createContext({
  direction: "vertical",
});

if (process.env.NODE_ENV !== "production") {
  ListContext.displayName = "ListContext";
}

export default ListContext;
