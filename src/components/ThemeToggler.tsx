import { FC, useMemo } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../context";

export const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "bg-accent-800 text-brand-50";
    }
    return "bg-accent-200 text-accent-500 ";
  }, [theme]);

  return (
    <button
      className={`text-sm btn btn-outline capitalize rounded-md ${styling}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="flex items-center gap-2 font-semibold">
        {theme === "light" ? (
          <FiSun fontSize="1.5rem" />
        ) : (
          <FiMoon fontSize="1.5rem" />
        )}
        <span className="flex-1 font-semibold">
          {theme === "light" ? "Light" : "Dark"}
        </span>
      </div>
    </button>
  );
};
