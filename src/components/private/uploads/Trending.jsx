import UploadSecondary from "@/components/public/uploads/UploadSecondary";

const Trending = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Trending</h2>
      <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-8">
        {data.map((item) => (
          <UploadSecondary item={item} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
