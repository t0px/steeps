"use client";

import Link from "next/link";
import { links } from "./links";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import UserMenu from "../form/UserMenu";

const Navbar = () => {
  const path = usePathname();
  const session = useSession();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    setIsUserMenuOpen(false)
  }, [path])

  return (
    <nav className="flex justify-between items-center shadow-lg border border-purple-500/25 background-gradient-dark rounded-md py-3 px-5">
      <div className="w-2/12">
        <Image src="/favicon.png" width={35} height={35} alt="steeps Logo" />
      </div>
      <ul className="flex gap-2 flex-1 justify-center">
        {links.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-2 transition rounded-full flex gap-2 items-center ${
              path === item.href ||
              (path.startsWith(item.href) && item.href !== "/")
                ? "bg-white text-black"
                : ""
            }`}
          >
            {item.icon}
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="flex w-2/12 gap-2 items-center justify-end">
        {session.status === "authenticated" ? (
          <>
            <div className="flex justify-end relative w-10 h-10">
              {isUserMenuOpen ? <UserMenu /> : ""}
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                alt="Profile Picture" // Change this
                fill
                className="cursor-pointer border border-purple-500/25 rounded-full aspect-square object-cover"
                src={session.data.user.image}
              />
            </div>
          </>
        ) : (
          <Link href="http://localhost:3000/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
