import Link from 'next/link';
import { HiOutlinePlus } from 'react-icons/hi';

const NewButton = () => {
  return (
    <Link
      className="ustify-center shadow-lg items-center flex fixed right-10 bottom-10 text-3xl aspect-square bg-violet-300 hover:bg-violet-400 w-fit border rounded-full  transition cursor-pointer
               border-violet-500/25  p-4 j"
      href="http://localhost:3000/explore/new"
    >
      <HiOutlinePlus />
    </Link>
  );
}
 
export default NewButton;