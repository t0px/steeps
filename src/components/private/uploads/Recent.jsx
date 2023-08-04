import UploadPrimary from "@/components/public/uploads/UploadPrimary";

const Recent = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Recent</h2>
      <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-8">
        {data.map((item) => (
          <UploadPrimary item={item} />
        ))}
      </div>
    </section>
  );
};

export default Recent;
