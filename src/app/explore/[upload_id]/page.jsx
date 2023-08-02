import { getSingleUpload } from "@/services/explore";

const UploadPage = async ({ params }) => {

  const data = await getSingleUpload(params.upload_id)
  console.log("Data:", data)
  return ( 
    <div>helloXDDDDDDDDDDDD</div>
   );
}
 
export default UploadPage;