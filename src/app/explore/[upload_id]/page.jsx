import { getComments, getSingleUpload } from "@/services/explore";
import { getIcons } from "@/services/icons";
import moment from "moment";
import Image from "next/image";

export const generateMetadata = async ({params}) => {
  const post = await getSingleUpload(params.upload_id)
  return {
    title: `${post.title} - steeps`,
    description: post.content
  }
}

const UploadPage = async ({ params }) => {

  const post = await getSingleUpload(params.upload_id)
  const { author } = post;
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden z-50 h-full max-lg:w-10/12 w-4/12 pointer-events-auto">
      <header className="relative flex justify-center items-center h-80 bg-neutral-700 border-b-8">
        <span className="text-white text-2xl z-10 absolute top-5 left-5">{getIcons(post.type)}</span>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
          src={post.banner}
          alt={post.title}
        />
        <h1 className="text-white post-header drop-shadow-lg max-w-sm text-center font-bold text-4xl z-1 absolute">
          {post.title}
        </h1>
      </header>
      <main className="flex flex-col gap-6 p-5">
        <p>{post?.content}</p>
        <div className="flex gap-3 self-end text-sm text-neutral-500">
          <div className="flex flex-col items-end gap-1 text-end">
            <div className="flex items-end gap-2">
              <Image
                src={author.avatar}
                width={25}
                height={25}
                className="aspect-square object-cover rounded-full"
                alt={author.username}
              />
              <span>{author.username}</span>
            </div>
            <span className="text-xs">{moment(post.createdAt).calendar()}</span>
          </div>
        </div>
        <hr />
      </main>
    </div>
  );
}
 
export default UploadPage;