import { getIcons } from "@/services/icons";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const UploadSecondary = ({ item }) => {
  return (
    <Link
      href={`/explore/${item._id}`}
      key={item._id}
      className="bg-white h-[100px] items-center border cursor-pointer relative hover:bg-neutral-50 transition border-neutral-400/50 rounded-xl"
    >
      <span className="absolute -top-2 text-2xl -left-2">
        {getIcons(item.type)}
      </span>
      <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center p-4 gap-3">
        <div className="w-4/6 self-start flex flex-col justify-between h-full">
          <h1 className="h-5/6">
            {item.title.length > 30
              ? `${item.title.slice(0, 30)}...`
              : item.title}
          </h1>
          <div className="flex gap-3 items-center self-end">
            <span className="flex gap-1 items-center">
              <span>
                {parseInt(item.comments?.length || 0).toLocaleString()}
              </span>{" "}
              <BsFillChatDotsFill className="text-blue-600" />
            </span>
            <span className="flex gap-1 items-center">
              <span>{parseInt(item.likes?.length || 0).toLocaleString()}</span>
              <FcLike />
            </span>
          </div>
        </div>
        <div className="w-2/6 absolute -right-3 rotate-12 h-[200px]">
          <Image src={item.banner.src} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
};

export default UploadSecondary;
