import { useMemo } from "react";

import { useTheme } from "../context";

export const ItemCard = () => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "bg-accent-900/90 text-brand-50";
    }
    return "bg-accent-50 text-accent-500 ";
  }, [theme]);

  return (
    <div className="!h-[20rem] shadow-2xl card lg:card-side bg-base-100">
      <figure className="w-full h-full lg:w-[50%] card-image">
        <img
          className="object-cover w-full h-full"
          src="/images/backdrop.jpg"
          alt="Property"
        />
      </figure>
      <div className={`w-full lg:w-[50%] card-body ${styling}`}>
        <div className="flex flex-col w-full h-full gap-8">
          <h2 className="text-2xl">Verdant Valley</h2>
          <p className="w-full text-sm text-wrap">
            Verdant Valley is a lush and fertile plain, filled with vibrant
            fields of grass and wildflowers.
          </p>
        </div>
        <div className="justify-end card-actions">
          <button className="capitalize btn btn-primary">View Property</button>
        </div>
      </div>
    </div>
  );
};
