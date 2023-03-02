import { FC, useMemo } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

import { ItemCard } from "../components";
import { useTheme } from "../context";

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "bg-primary text-brand-50";
    }
    return "bg-brand-100 text-brand-900";
  }, [theme]);

  return (
    <div className="relative w-full h-full min-h-[80vh] flex flex-col gap-4">
      <header className="h-full min-h-[80vh] hero">
        <div className={`hero-overlay bg-opacity-50 ${styling}`}></div>
        <div className="hero-content !container !px-0 py-10 flex h-[60vmin] lg:!items-center flex-col lg:flex-row-reverse gap-16 lg:gap-20 ">
          <img
            src="/images/backdrop.jpg"
            className="lg:w-[48rem] max-w-full h-full object-cover rounded-lg shadow-2xl"
          />
          <div className="flex flex-col justify-center w-full h-full gap-8 font-sans text-left text-accent-800 dark:text-white">
            <h1 className="w-full text-4xl lg:text-5xl text-current !leading-tight">
              Find your dream property today!
            </h1>
            <h4 className="w-full text-lg font-light lg:text-xl lg:leading-loose">
              Our expert land agents are here to help you find the perfect piece
              of land. Contact us today to schedule a consultation and let's get
              started on finding your ideal property.
            </h4>
            <a
              href="/contact"
              className="max-w-sm font-sans text-lg text-current rounded-md btn btn-outline btn-lg lg:text-xl"
            >
              <div className="flex items-center gap-4">
                <span className="capitalize">Get started</span>
                <FiArrowRightCircle fontSize="1.75rem" />
              </div>
            </a>
          </div>
        </div>
      </header>
      <section className="container flex flex-col gap-8 py-10 mx-auto min-h-[50vh]">
        <div className="flex flex-col space-y-8">
          <h1 className="text-xl font-semibold capitalize">
            Properties For sale
          </h1>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </section>
    </div>
  );
};
