"use client";

import { useState } from "react";
import { btns } from "./btns";
import Question from "./types/Question";
import { postUpload, saveUpload } from "@/services/explore";

const Form = () => {
  const [errorData, setErrorData] = useState({
    title: '',
    textarea: ''
  })
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    banner: "",
    author: "64caf28527b266dc5ba47180",
    type: "question",
    // likes: [],
    // comments: []
  });


  return (
    <form onSubmit={(e) => saveUpload(formData, e)} className="flex flex-col py-6 px-10 gap-4 justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden z-50 h-2/5 max-lg:w-10/12 w-4/12 pointer-events-auto">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between">
          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            type="text"
            placeholder="Title"
            className="outline-none w-full"
          />
          <span>
            <span
              className={`${formData.title.length > 30 ? "text-red-600" : ""}`}
            >
              {formData.title.length}
            </span>
            /30
          </span>
        </div>
        <input
          value={formData.banner}
          onChange={(e) => setFormData({ ...formData, banner: e.target.value })}
          type="text"
          placeholder="Image Link"
          className="outline-none w-full"
        />
        <div className="flex gap-5 w-full">
          {btns.map((btn) => (
            <input
              onClick={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              key={btn.id}
              type="button"
              value={btn.value}
              className={`capitalize flex-1 border rounded-full  transition cursor-pointer
               border-blue-500/25  px-2 py-1 ${
                 formData.type === btn.value
                   ? "bg-yellow-200 hover:bg-yellow-300"
                   : "bg-blue-200 hover:bg-blue-300"
               }`}
            />
          ))}
        </div>
      </div>
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Write anything..."
        className="resize-none w-full h-full outline-none"
        rows="10"
      ></textarea>
      <input
      value="Send"
        type="submit"
        className="bg-blue-200 hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
      />
    </form>
  );
};

export default Form;
