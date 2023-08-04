import UploadPrimary from "@/components/public/uploads/UploadPrimary";
import { getIcons } from "@/services/icons";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const Trending = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Dogs</h2>
      <hr />
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <UploadPrimary item={item} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
