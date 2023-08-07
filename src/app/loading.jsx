import Image from "next/image";

const UploadsPageLoading = () => {
  return (
    <section className="h-full flex justify-center items-center flex-col gap-2">
      <Image src="/duck.gif" width={65} height={65} alt="duck-walking-gif" />
    </section>
  );
}
 
export default UploadsPageLoading;