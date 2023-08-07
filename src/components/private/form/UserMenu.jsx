"use client";

import { signOut, useSession } from "next-auth/react";
import { BiLogOutCircle, BiSolidUser } from "react-icons/bi";
import Link from "next/link";
import { findUser } from "@/services/api/user/gets";
import { useRef, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import { updateUsername } from "@/services/api/user/puts";

const UserMenu = () => {
  const session = useSession();
  const menuRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(session.data.user.name);

  const handleSubmitNameChange = async () => {
    setIsEditing((prev) => !prev);
    const res = await updateUsername(nameInput, session.data.user.id)
  }

  return (
    <div
      ref={menuRef}
      className="bg-white pr-10 pl-4 z-50 py-4 absolute flex flex-col gap-3 top-full mt-2 shadow-lg rounded-md"
    >
      <div>
        <div className="font-bold text-lg flex items-center gap-2">
          {isEditing ? (
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="inline-block"
            />
          ) : (
            <h3>{session.data.user.name}</h3>
          )}
          {isEditing ? (
            <ImCheckmark
              className="cursor-pointer"
              onClick={() => handleSubmitNameChange()}
            />
          ) : (
            <AiFillEdit
              className="cursor-pointer"
              onClick={() => setIsEditing((prev) => !prev)}
            />
          )}
        </div>
        <span className="text-sm">{session.data.user.email}</span>
      </div>
      <hr />
      <div className="text-neutral-600 text-sm flex flex-col gap-2">
        <Link
          className="flex gap-2 items-center whitespace-nowrap py-1 px-2 hover:bg-neutral-200 duration-300 rounded-md"
          href={`http://localhost:3000/users/${session.data.user.id}`}
        >
          <BiSolidUser />
          <span>Profile</span>
        </Link>
        <button
          onClick={() => signOut()}
          className="flex gap-2 items-center whitespace-nowrap py-1 px-2 hover:bg-neutral-200 duration-300 rounded-md"
          href="/profile"
        >
          <BiLogOutCircle />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
