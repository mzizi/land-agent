import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[full] gap-10 text-current">
      <h1 className="text-[10rem] font-sans">404</h1>
      <h2 className="font-sans text-2xl capitalize">Page not found!</h2>
      <Link
        to="/"
        className="px-6 py-4 text-white rounded-md bg-brand-800 dark:bg-brand-500 hover:shadow-lg"
      >
        <div className="flex items-center gap-4 font-semibold">
          <FiArrowLeftCircle fontSize="2rem" />
          <span className="font-serif text-lg">Back to Homepage</span>
        </div>
      </Link>
    </div>
  );
};
