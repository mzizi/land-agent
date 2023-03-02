import { FC, useState } from "react";
import { FiLogIn, FiMenu, FiPhoneCall, FiXSquare } from "react-icons/fi";

import { Transition } from "@headlessui/react";

import { useTheme } from "../context";
import { IRoute } from "../types";
import { ThemeToggler } from "./ThemeToggler";

export interface NavbarProps {
  links: IRoute[];
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-0 z-50 w-full py-4 font-sans shadow-lg h-max bg-brand-50 text-brand-900 dark:bg-brand-700 dark:text-brand-50">
      <div className="flex items-center justify-between h-16 mx-auto lg:container">
        <div className="flex items-center justify-between space-x-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-4 p-4 rounded-md">
              <div className="w-8 h-6">
                {theme === "dark" ? (
                  <img
                    alt="mzizi logo"
                    src="/images/logo-dark-small.png"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <img
                    alt="mzizi logo"
                    src="/images/logo-small.png"
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <span className="text-sm font-black text-current uppercase">
                Land Agent Template
              </span>
            </a>
          </div>
          <div className="items-baseline flex-1 hidden space-x-4 capitalize lg:flex">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-3 py-2 text-xs font-medium text-current border-transparent lg:text-sm border-y-2 hover:border-b-current"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <div className="items-center hidden gap-4 text-sm font-semibold capitalize lg:flex">
            <a
              href="/contact"
              className="p-2.5 bg-brand-700 rounded-md text-white dark:bg-white dark:text-brand-800"
            >
              <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm">
                <span>Contact</span>
                <FiPhoneCall />
              </div>
            </a>
            <a
              href="/register"
              className="p-2.5 outline outline-2 outline-current rounded-md text-current"
            >
              <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm">
                <span>Register</span>
                <FiLogIn />
              </div>
            </a>
          </div>
          <div className="hidden sm:block">
            <ThemeToggler />
          </div>
          <button
            type="button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 text-current lg:hidden"
          >
            {!isOpen ? (
              <FiMenu fontSize="1.5rem" />
            ) : (
              <FiXSquare fontSize="1.5rem" />
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="lg:hidden" id="mobile-menu">
          <div className="flex flex-col p-2 space-y-2 capitalize bg-white rounded-md dark:bg-brand-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-current rounded-md lg:hidden hover:bg-brand-500 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="block sm:hidden">
              <ThemeToggler />
            </div>
            <div className="flex flex-wrap items-center gap-8 py-4">
              <a
                href="/contact"
                className="p-2.5 bg-brand-700 rounded-md text-white dark:bg-white dark:text-brand-800"
              >
                <div className="flex items-center justify-center space-x-4">
                  <span>Contact</span>
                  <FiPhoneCall />
                </div>
              </a>
              <a
                href="/register"
                className="p-2.5 outline outline-2 outline-current rounded-md text-current"
              >
                <div className="flex items-center justify-center space-x-4">
                  <span>Register</span>
                  <FiLogIn />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};
