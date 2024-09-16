import * as React from "react";

export const ListContext = React.createContext({
  direction: "vertical",
});

if (process.env.NODE_ENV !== "production") {
  ListContext.displayName = "ListContext";
}

export default ListContext;
