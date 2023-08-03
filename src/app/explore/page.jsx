import { getUploads } from "@/services/explore";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import Link from "next/link";
import moment from "moment/moment";
import { getIcons } from "@/services/icons";
import Image from "next/image";
import { HiOutlinePlus } from "react-icons/hi";

  export const metadata = {
    title: "Explore - steeps",
    description: "View all uploaded posts on steeps",
  };

const UploadsPage = async () => {
  const data = await getUploads();

  return (
    <section className="grid grid-cols-3 gap-8">
      {data ? (
        data.map((item) => (
          <Link
            href={`/explore/${item._id}`}
            key={item._id}
            className="bg-white w-full border cursor-pointer relative hover:bg-neutral-50 transition border-neutral-400/50 h-full flex flex-col rounded-xl p-4 gap-3"
          >
            <span className="absolute -top-2 text-2xl -left-2">
              {getIcons(item.type)}
            </span>
            <div className="flex gap-2 items-center">
              <h4>{item.title}</h4>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                width={30}
                height={30}
                className="object-fit aspect-square rounded-full"
                src={item.author.avatar}
              />
              <span className="text-xs text-neutral-500">
                @<strong className="text-sm">{item.author.username}</strong>
              </span>
            </div>
            <hr />
            <div className="flex justify-between text-xs items-end text-neutral-500 justify-self-end h-full">
              <div className="flex gap-3 items-center">
                <span className="flex gap-1 items-center">
                  <span>
                    {parseInt(item.comments?.length || 0).toLocaleString()}
                  </span>{" "}
                  <BsFillChatDotsFill className="text-blue-600" />
                </span>
                <span className="flex gap-1 items-center">
                  <span>
                    {parseInt(item.likes?.length || 0).toLocaleString()}
                  </span>
                  <FcLike />
                </span>
              </div>
              <span>{moment(item.createdAt).startOf("hour").fromNow()}</span>
            </div>
          </Link>
        ))
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
        className="ustify-center items-center flex absolute right-10 bottom-10 text-3xl aspect-square bg-blue-200 hover:bg-blue-300 w-fit border rounded-full  transition cursor-pointer
               border-blue-500/25  p-4 j"
        href="http://localhost:3000/explore/new"
      >
        <HiOutlinePlus />
      </Link>
    </section>
  );
}
 
export default UploadsPage;