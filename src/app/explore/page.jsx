import { getUploads } from "@/services/explore";
import { FcSms } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { BsQuestionCircleFill } from "react-icons/bs";
import Link from "next/link";

const UploadsPage = async ({children}) => {
  const data = await getUploads();

  return (
    <section className="grid grid-cols-3 gap-8">
      {data?.map((item) => (
        <Link
          href={`/explore/${item._id}`}
          key={item.id}
          className="bg-white w-full border cursor-pointer hover:bg-neutral-50 transition border-neutral-400/50 h-full flex flex-col rounded-xl overflow-hidden p-4 gap-3"
        >
          <div className="flex gap-2 items-baseline">
            <BsQuestionCircleFill className="text-blue-400" />
            <h4>{item.title}</h4>
          </div>
          <span className="text-sm text-neutral-500">
            by <strong>Anonymous</strong>
          </span>
          <hr />
          <div className="flex justify-between text-xs items-end text-neutral-500 justify-self-end h-full">
            <div className="flex gap-3 items-center">
              <span className="flex gap-1 items-center">
                <span>{parseInt("2000").toLocaleString()}</span> <FcSms />
              </span>
              <span className="flex gap-1 items-center">
                <span>{parseInt("1337").toLocaleString()}</span>
                <FcLike />
              </span>
            </div>
            <span>27 minutes ago</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
 
export default UploadsPage;