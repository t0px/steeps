import UploadSecondary from "@/components/public/uploads/UploadSecondary";

const Trending = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Dogs</h2>
      <hr />
      <div className="grid grid-cols-3 gap-8">
        {data.map((item) => (
          <UploadSecondary item={item} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
