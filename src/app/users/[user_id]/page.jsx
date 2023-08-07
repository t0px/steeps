import { getSingleUser } from "@/services/api/user/gets";
import { notFound } from "next/navigation";
import { getUploadsByUser } from "@/services/api/uploads/posts";
import Recent from "@/components/private/uploads/Recent";

export const generateMetadata = async ({ params }) => {
  const user = await getSingleUser(params.user_id);
  return {
    title: `${user.username} - steeps`,
  };
};

const UserPage = async ({params}) => {
  const user = await getSingleUser(params.user_id)
  const uploads = await getUploadsByUser(params.user_id);
  const sorted_uploads = uploads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  console.log("params:", params.user_id)
  console.log("Uploads", uploads);
  return (
    <section>
      <Recent data={sorted_uploads} title="Your Uploads"/>
    </section>
  );
};

export default UserPage;
