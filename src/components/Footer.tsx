import { FC, useMemo } from "react";

import { useTheme } from "../context";
import { IRoute } from "../types";

type FooterLinks = Omit<IRoute, "component">;

export interface FooterProps {
  links: FooterLinks[];
}

export const Footer: FC<FooterProps> = ({ links }) => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "text-brand-50";
    }
    return "bg-brand-50 text-brand-900";
  }, [theme]);

  return (
    <footer className={`relative py-10 footer footer-center ${styling}`}>
      <div className="flex flex-wrap items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans font-semibold link link-hover"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="font-sans text-md">
        Copyright &copy; {new Date().getFullYear()} - All right reserved by
        Mzizi Inc
      </p>
    </footer>
  );
};
