import * as React from "react";

export interface ListContextProps {
  direction: "horizontal" | "vertical";
}

declare const ListContext: React.Context<ListContextProps>;
export default ListContext;
