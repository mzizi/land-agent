import { FC, ReactNode, useMemo } from "react";

import { useTheme } from "../context";
import { ILink } from "../types";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export interface PageProps {
  links: ILink[];
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children, links }) => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "bg-brand-800/90 text-brand-50";
    }
    return "bg-brand-50 text-brand-900";
  }, [theme]);

  return (
    <section
      className={`w-full h-full min-h-screen min-w-screen flex flex-col ${styling}`}
    >
      <Navbar links={links} />
      <div className="flex items-center justify-center flex-1 w-full h-full mx-auto">
        {children}
      </div>
      <Footer links={links} />
    </section>
  );
};
