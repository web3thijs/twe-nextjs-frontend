import { Menu } from "@headlessui/react";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="px-4 py-5 sticky top-0 font-medium z-50 bg-white">
        <div className="container flex flex-wrap justify-between items-center">
          <a href="./#" className="flex items-center justify-center">
            <img
              src="logo.svg"
              className="mr-3 h-6 sm:h-10"
              alt="Flowbite Logo"
            />
            <p className="text-blueish font-semibold text-2xl">TWe</p>
          </a>
          <Menu>
            <Menu.Button className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-xl lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Menu.Button>
            <Menu.Items className={"flex flex-col absolute bg-white p-6 top-20 right-0 shadow-3xl lg:hidden"}>
            <Menu.Item>
            <a
                  href="./#header"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Home
                </a>
              </Menu.Item>
              <Menu.Item>
              <a
                  href="./#services"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Diensten
                </a>
              </Menu.Item>
              <Menu.Item>
              <a
                  href="./#contact"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Contact
                </a>
              </Menu.Item>
              <Menu.Item>
              <a
                  href="./#references"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Realisaties
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="./#reviews"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Reviews
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className="hidden w-full lg:block lg:w-auto" id="mobile-menu">
            <ul className="flex font-semibold">
              <li className="ml-14">
                <a
                  href="./#header"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Home
                </a>
              </li>
              <li className="ml-14">
                <a
                  href="./#services"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Diensten
                </a>
              </li>
              <li className="ml-14">
                <a
                  href="./#contact"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Contact
                </a>
              </li>
              <li className="ml-14">
                <a
                  href="./#references"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Realisaties
                </a>
              </li>
              <li className="ml-14">
                <a
                  href="./#reviews"
                  className="text-blueish hover:text-greenish transition-all"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
