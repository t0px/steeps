"use client";

import { useState } from "react";
import { saveUpload } from "@/services/api/uploads/posts";
import ContentSection from "@/components/private/form/ContentSection";
import ImagesSection from "@/components/private/form/ImagesSection";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";

const Form = () => {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    }
  })

  const [isContinued, setIsContinued] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    banner: {},
    author: session.data.user.id,
    type: "question",
    edited: false,
    options: [],
    // likes: [],
    // comments: []
  });

  const handleSubmit = async (formData, e) => {
    const data = await saveUpload(formData, e);
    // const notify = () => toast(data.title);
    // notify();
    if (data._id) {
    router.push(`/explore/${data._id}`);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(formData, e)}
      className={`flex flex-col py-6 px-10 gap-4 bg-white rounded-md shadow-lg overflow-hidden z-50 h-3/5 max-lg:w-10/12 w-4/12 pointer-events-auto`}
    >
      <ToastContainer />
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
