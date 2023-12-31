import PollView from "@/components/private/uploads/upload/PollView";
import {  getSingleUpload } from "@/services/api/uploads/gets";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({params}) => {
  const post = await getSingleUpload(params.upload_id)
  if (!post) { 
    notFound()
  }
  return {
    title: `${post.title} - steeps`,
    description: post.content
  }
}

const UploadPage = async ({ params }) => {

  const post = await getSingleUpload(params.upload_id)
  const { author } = post;
  return (
    <div className="bg-white rounded-md shadow-2xl z-50 max-lg:w-full min-h-full overflow-hidden w-4/12 pointer-events-auto">
      <header
        className={`relative flex justify-center items-center h-80`}
        style={{ backgroundColor: post.banner.avg_color }}
      >
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
          src={post.banner.src}
          alt={post.banner.alt}
        />
        <h2 className="capitalize px-2 py-1 bg-gray-200 text-xs w-fit absolute z-1 left-4 bottom-4 opacity-70 rounded-full">
          {post.type}
        </h2>
        <h1 className="text-white post-header drop-shadow-lg max-w-sm text-center font-bold text-4xl z-1 absolute">
          {post.title}
        </h1>
      </header>
      <main className="flex flex-col gap-6 p-5">
        <p className="leading-relaxed whitespace-pre-wrap">
          {post?.content.replace(" ", "\u00A0")}
        </p>
        {post.options?.length > 0 ? <PollView post={post} /> : ""}
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
            {post.edited === 'true' ? (
              <span className="text-xs">
                <span className="font-medium">Edited</span>{" "}
                {moment(post.updatedAt).calendar().toLowerCase()}
              </span>
            ) : (
              <span className="text-xs">
                {moment(post.createdAt).calendar()}
              </span>
            )}
          </div>
        </div>
        <hr />
      </main>
    </div>
  );
}
 
export default UploadPage;