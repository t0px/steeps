import UploadPrimary from "@/components/public/uploads/UploadPrimary";

const Recent = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Recent</h2>
      <hr />
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <UploadPrimary item={item} />
        ))}
      </div>
    </section>
  );
};

export default Recent;
