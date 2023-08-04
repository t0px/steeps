import { getIcons } from "@/services/icons";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const Recent = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Recent</h2>
      <hr />
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
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
                alt={item.author.username}
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
        ))}
      </div>
    </section>
  );
};

export default Recent;