import { getIcons } from "@/services/icons";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const UploadExpanded = ({ item }) => {
  return (
    <Link
      href={`/explore/${item._id}`}
      key={item._id}
      className={`bg-white w-full shadow-lg border cursor-pointer relative hover:bg-neutral-50 transition border-neutral-400/50 h-full flex flex-col rounded-md p-4 gap-3 row-span-2`}
    >
      <span className="absolute -top-2 text-2xl -left-2">
        {getIcons(item.type)}
      </span>
      <div className="flex gap-2 items-center">
        <h3 className="font-medium">{item.title}</h3>
      </div>
      <div className="flex gap-2 items-center">
        <Image
          alt={item.author.username}
          width={30}
          height={30}
          className="object-fit aspect-square rounded-full"
          src={item.author.avatar}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="text-xs text-neutral-500">
          @<strong className="text-sm">{item.author.username}</strong>
        </span>
      </div>
      <hr />
      <div className="flex flex-col justify-between h-full relative gap-8">
        <p className="line-clamp-3 self-start text-sm text-neutral-500">
          {item.content}
        </p>
        <div className="flex justify-between text-xs items-end text-neutral-500 justify-self-end">
          <div className="flex gap-3 items-center">
            <span className="flex gap-1 items-center">
              <span>
                {parseInt(item.comments?.length || 0).toLocaleString()}
              </span>
              <BsFillChatDotsFill className="text-blue-600" />
            </span>
            <span className="flex gap-1 items-center">
              <span>{parseInt(item.likes?.length || 0).toLocaleString()}</span>
              <FcLike />
            </span>
          </div>
          <span>{moment(item.createdAt).startOf("hour").fromNow()}</span>
        </div>
      </div>
    </Link>
  );
};

export default UploadExpanded;
