"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import useSWR from "swr";
import { ImCheckmark } from "react-icons/im";
import { useRouter } from "next/navigation";
import { getPhotos } from "@/services/api/pexels/posts";

const ImagesSection = ({ setIsContinued, setFormData, formData }) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");
  const [photosData, setPhotosData] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [msg, setMsg] = useState("Photos will appear here.");

  useEffect(() => {
    if (photosData && !photosData?.photos?.length > 0) {
      setMsg(`No results matching "${searchInput}".`);
    }
  }, [setPhotosData]);

  const handleClick = async () => {
    const data = await getPhotos(searchInput);
    setPhotosData(data);
  }

  return (
    <div className="flex flex-col justify-between h-full overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-2">
        <div
          onClick={() => setIsContinued(false)}
          className="bg-blue-200 w-fit hover:bg-blue-300 border rounded-full  transition cursor-pointer
               border-blue-500/25   p-2"
        >
          <TiArrowBack />
        </div>
        <div className="flex justify-between items-end">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search Photos..."
            className="text-lg h-fit resize-none w-fit outline-none"
          />
          <button
            onClick={() => handleClick()}
            type="button"
            className="bg-blue-200 h-fit hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
          >
            Search
          </button>
        </div>
        <hr />
        {photosData?.photos.length > 0 ? (
          <div className="grid grid-cols-3 gap-1 pb-10">
            {photosData.photos.map((photo) => (
              <div
              key={photo.id}
                className={`aspect-square relative cursor-pointer flex justify-center items-center hover:z-10 `}
                onClick={() =>
                  setFormData({
                    ...formData,
                    banner: {
                      src: photo.src.large,
                      avg_color: photo.avg_color,
                      alt: photo.alt,
                      url: photo.url,
                    },
                  })
                }
              >
                {photo.src.large === formData.banner.src ? (
                  <ImCheckmark className="absolute text-white text-4xl z-10" />
                ) : (
                  ""
                )}
                <Image
                  fill
                  className={`object-cover hover:brightness-50 duration-300 ${
                    photo.src.large === formData.banner.src
                      ? "brightness-[25%]"
                      : ""
                  }`}
                  src={photo.src.large}
                  alt={photo.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>{msg}</p>
        )}
      </div>
      <input
        // onClick={() => router.back()} // for now
        value={`Post ${formData.type}`}
        type="submit"
        className="bg-blue-200 mb-2 hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
      />
    </div>
  );
};

export default ImagesSection;
