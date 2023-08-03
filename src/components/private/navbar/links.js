import { BsStars } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';
import { MdList } from 'react-icons/md';
import { FaUser } from "react-icons/fa";


export const links = [
  {
    title: "Home",
    href: "/",
    icon: <MdHome />,
  },
  {
    title: "Explore",
    href: "/explore",
    icon: <MdList />,
  },
  {
    title: "Popular",
    href: "/popular",
    icon: <BsStars />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <FaUser />,
  },
];