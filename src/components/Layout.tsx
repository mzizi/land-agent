import { FC, ReactNode } from "react";

import { routes } from "../utils";
import { Page } from "./Page";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="relative w-full h-full min-h-screen min-w-screen">
      <Page links={routes}>{children}</Page>
    </main>
  );
};
