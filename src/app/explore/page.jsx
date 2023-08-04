import { getUploads } from "@/services/api/uploads/gets";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Link from "next/link";
import moment from "moment/moment";
import { getIcons } from "@/services/icons";
import Image from "next/image";
import { HiOutlinePlus } from "react-icons/hi";
import Recent from "@/components/private/uploads/Recent";
import Trending from "@/components/private/uploads/Trending";

export const metadata = {
  title: "Explore - steeps",
  description: "View all uploaded posts on steeps",
};

const UploadsPage = async () => {

  //testing filtering... with data
  const data = await getUploads();
  const recent_data = data.filter((item) =>
    !item.title.toLowerCase().includes("dogs")
  );
  const trending_data = data.filter((item) =>
    item.title.toLowerCase().includes("dogs")
  );

  return (
    <section className="flex flex-col gap-16">
      {data ? (
        <>
          <Trending data={trending_data} />
          <Recent data={recent_data} />
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-xl whitespace-nowrap">Be the first to post!</p>
          <Link
            href="http://localhost:3000/explore/new"
            className="bg-blue-200 mb-2 hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
          >
            New
          </Link>
        </div>
      )}
      <Link
        className="ustify-center items-center flex fixed right-10 bottom-10 text-3xl aspect-square bg-blue-200 hover:bg-blue-300 w-fit border rounded-full  transition cursor-pointer
               border-blue-500/25  p-4 j"
        href="http://localhost:3000/explore/new"
      >
        <HiOutlinePlus />
      </Link>
    </section>
  );
};

export default UploadsPage;
