import { getUploads } from "@/services/explore";
import { FcSms } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Link from "next/link";
import moment from "moment/moment";
import { getIcons } from "@/services/icons";

const UploadsPage = async () => {
  const data = await getUploads();

  return (
    <section className="grid grid-cols-3 gap-8">
      
      {data ? data.map((item) => (
        <Link
          href={`/explore/${item._id}`}
          key={item._id}
          className="bg-white w-full border cursor-pointer hover:bg-neutral-50 transition border-neutral-400/50 h-full flex flex-col rounded-xl overflow-hidden p-4 gap-3"
        >
          <div className="flex gap-2 items-center">
            <span className="font-bold flex items-center gap-1">[{getIcons(item.type)}]</span>
            <h4>{item.title}</h4>
          </div>
          <span className="text-xs text-neutral-500">
            @<strong className="text-sm">{item.author.username}</strong>
          </span>
          <hr />
          <div className="flex justify-between text-xs items-end text-neutral-500 justify-self-end h-full">
            <div className="flex gap-3 items-center">
              <span className="flex gap-1 items-center">
                <span>
                  {parseInt(item.comments?.length || 0).toLocaleString()}
                </span>{" "}
                <FcSms />
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
      )) : (
        <p>No uploads found.</p>
      )}
      <Link
        className="absolute right-5 bottom-5 text-6xl"
        href="http://localhost:3000/explore/new"
      >
        +
      </Link>
    </section>
  );
}
 
export default UploadsPage;