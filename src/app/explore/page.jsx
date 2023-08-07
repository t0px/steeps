import { getUploads } from "@/services/api/uploads/gets";
import Link from "next/link";
import { HiOutlinePlus } from "react-icons/hi";
import Recent from "@/components/private/uploads/Recent";
import Trending from "@/components/private/uploads/Trending";
import { useSession } from "next-auth/react";

export const metadata = {
  title: "Explore - steeps",
  description: "View all uploaded posts on steeps",
};

const UploadsPage = async () => {
  //testing filtering... with data
  const data = await getUploads();
  const recent_data = data
    .filter((item) => !item.title.toLowerCase().includes("dog"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const trending_data = data
    .filter((item) => item.title.toLowerCase().includes("dog"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="flex flex-col gap-16">
      {data ? (
        <>
          <Trending data={trending_data} />
          <Recent data={recent_data} title="Recent" />
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
    </section>
  );
};

export default UploadsPage;
