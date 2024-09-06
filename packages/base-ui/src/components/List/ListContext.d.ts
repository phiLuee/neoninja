import * as React from "react";

export interface ListContextProps {
  dense: boolean;
}

declare const ListContext: React.Context<ListContextProps>;
export default ListContext;
