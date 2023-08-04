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
      className="h-[100px] shadow-lg items-center border cursor-pointer relative bg-white hover:bg-neutral-50 transition border-neutral-400/50 rounded-md"
    >
      <span className="absolute -top-2 text-2xl -left-2">
        {getIcons(item.type)}
      </span>
      <div className="w-full h-full rounded-md overflow-hidden relative flex items-center p-4 gap-3">
        <div className="w-4/6 self-start flex flex-col justify-between h-full">
          <h3 className="h-5/6 font-medium truncate">
            {item.title}
          </h3>
          <div className="flex text-lg gap-3 self-end absolute bottom-2">
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
        <div className="w-2/6 absolute -right-3 rotate-12 h-[200px] flex justify-center items-center bg-blue-600">
          <Image src={item.banner.src} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
};

export default UploadSecondary;
