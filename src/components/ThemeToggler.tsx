import { FC, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "../context";

export const ThemeToggler: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 text-sm no-underline rounded-md shadow-inner bg-brand-100 dark:bg-brand-500"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="flex items-center gap-2 font-semibold">
        {theme === "light" ? (
          <FiSun fontSize="1.5rem" />
        ) : (
          <FiMoon fontSize="1.5rem" />
        )}
        <span className="flex-1 px-2 font-semibold">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </div>
    </button>
  );
};
