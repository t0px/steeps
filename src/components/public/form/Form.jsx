"use client";

import { useState } from "react";
import { saveUpload } from "@/services/api/uploads/posts";
import ContentSection from "@/components/private/form/ContentSection";
import ImagesSection from "@/components/private/form/ImagesSection";
import { useRouter } from "next/navigation";

const Form = () => {

  const router = useRouter();

  const [isContinued, setIsContinued] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    banner: {},
    author: "64caf28527b266dc5ba47180",
    type: "question",
    // likes: [],
    // comments: []
  });

  const handleSubmit = async (formData, e) => {
    const data = await saveUpload(formData, e);
    router.push(`/explore/${data._id}`)
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(formData, e)}
      className={`flex flex-col py-6 px-10 gap-4 bg-white rounded-xl shadow-lg overflow-hidden z-50 h-3/5 max-lg:w-10/12 w-4/12 pointer-events-auto`}
    >
      {!isContinued ? (
        <ContentSection
          formData={formData}
          setFormData={setFormData}
          setIsContinued={setIsContinued}
        />
      ) : (
        <>
          <ImagesSection
            setIsContinued={setIsContinued}
            formData={formData}
            setFormData={setFormData}
          />
        </>
      )}
    </form>
  );
};

export default Form;
