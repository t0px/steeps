import UploadExpanded from "@/components/public/uploads/UploadExpanded";
import UploadPrimary from "@/components/public/uploads/UploadPrimary";

const Recent = ({ data, title }) => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">{title}</h2>
      <div className="grid max-lg:grid-cols-1 grid-cols-3 gap-8">
        {data.map((item) => {
          // Mock different grid styles
          if (item.content?.length > 100) {
          return <UploadExpanded item={item} />;
          }
          return <UploadPrimary item={item} />;
})}
      </div>
    </section>
  );
};

export default Recent;
