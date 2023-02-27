import { FC, useState } from "react";
import { FiLogIn, FiMenu, FiPhoneCall, FiXSquare } from "react-icons/fi";

import { Transition } from "@headlessui/react";

export interface LinkType {
  href: string;
  label: string;
}

export interface NavbarProps {
  links: LinkType[];
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-2 font-sans bg-black-50 text-black-900">
      <div className="flex items-center justify-between h-16 mx-auto lg:container">
        <div className="flex items-center justify-between space-x-20">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium text-white rounded-md bg-black-700"
            >
              Land Agent Template
            </a>
          </div>
          <div className="flex-1 hidden lg:block">
            <div className="flex items-baseline space-x-4 ">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className="px-3 py-2 text-xs font-medium text-current xl:text-sm border-y-2 hover:border-b-current"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="items-center hidden gap-4 text-sm font-semibold md:flex">
            <a
              href="/contact"
              className="p-2.5 bg-black-700 rounded-md text-white"
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
          <div className="flex flex-col p-2 space-y-2 bg-white rounded-md shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-current rounded-md hover:bg-black-500 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-8 py-4">
              <a
                href="/contact"
                className="p-2.5 bg-black-700 rounded-md text-white"
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
