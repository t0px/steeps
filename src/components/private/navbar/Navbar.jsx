"use client";

import Link from "next/link";
import { links } from "./links";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const isLoggedIn = false;

  return (
    <nav className="flex justify-between items-center border border-neutral-500/25 text-white bg-neutral-800 rounded-2xl py-3 px-5">
      <div className="w-2/12">
        <Image src="/favicon.png" width={35} height={35} alt="steeps Logo" />
      </div>
      <ul className="flex gap-2 flex-1 justify-center">
        {links.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-2 transition rounded-full flex gap-2 items-center ${
              path === item.href || path.startsWith(item.href) && item.href !== '/' ? "bg-white text-black" : ""
            }`}
          >
            {item.icon}
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex w-2/12 gap-2 items-center justify-end">
        {isLoggedIn ? (
          <>
            <span>Username</span>
            <Image
              alt="Profile Picture" // Change this
              width={35}
              height={35}
              className="border border-blue-500/40 rounded-full aspect-square object-cover"
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </>
        ) : (
          <Link href='http://localhost:3000/login'>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
