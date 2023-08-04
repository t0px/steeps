"use client"

import { useState } from "react";
import { links } from "./links";
import Link from "next/link";
import {RxHamburgerMenu} from 'react-icons/rx';

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav
      className={`fixed shadow-lg left-0 top-0 flex flex-col z-1 gap-3 border border-neutral-500/25 bottom-0 bg-neutral-800 ${
        isSidebarOpen ? "w-60" : "w-20"
      } text-white p-4 duration-300`}
    >
      <RxHamburgerMenu
        className={`${
          !isSidebarOpen ? "self-center" : "self-end"
        } text-xl cursor-pointer`}
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      />
      <ul className="flex flex-col gap-4">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              className={`px-4 py-2 flex gap-4 items-center`}
              href={item.href}
            >
              <span>{item.icon}</span>
              <h4
                className={`duration-300 ${
                  isSidebarOpen
                    ? ""
                    : "opacity-0 pointer-events-none select-none cursor-none"
                }`}
              >
                {item.title}
              </h4>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
export default Sidebar;