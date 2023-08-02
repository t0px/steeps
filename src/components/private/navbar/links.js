import { MdHome } from 'react-icons/md';
import { MdList } from 'react-icons/md';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";


export const links = [
  {
    title: "Home",
    href: "/",
    icon: <MdHome />
  },
  {
    title: "Explore",
    href: "/explore",
    icon: <MdList />
  },
  {
    title: "Popular",
    href: "/popular",
    icon: <MdOutlineArrowDropDownCircle />
  },
]