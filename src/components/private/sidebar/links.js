import { MdHome } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";


export const links = [
  {
    title: "Profile",
    href: "/profile",
    icon: <MdHome />,
  },
  {
    title: "Friends",
    href: "/friends",
    icon: <FaUserFriends />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <IoMdSettings />,
  },
  {
    title: "Support",
    href: "/support",
    icon: <BiSupport />,
  },
  {
    title: "About",
    href: "/about",
    icon: <BiSupport />,
  },
];