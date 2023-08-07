"use client";

import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

const Poll = ({ formData, setFormData }) => {
  const [options, setOptions] = useState([]);
  const [optionInput, setOptionInput] = useState("");

  const handleAddOption = () => {
    setFormData({
      ...formData,
      options: [
        ...formData.options,
        {
          title: optionInput,
          users_selected: [],
        },
      ],
    });
    setOptionInput('');
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="h-2/4 w-full flex items-center gap-2">
          <button
            onClick={() => handleAddOption()}
            type="button"
            className="bg-blue-200 mb-2 aspect-square hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25 text-sm p-2"
          >
            <HiOutlinePlus />
          </button>
          <input
            value={optionInput}
            onChange={(e) => setOptionInput(e.target.value)}
            type="text"
            placeholder="Option..."
            className="resize-none w-full outline-none border-none"
          />
          <span>{formData.options.length}/5</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 ml-10 w-fit">
        {formData.options.map((opt, index) => (
          <div key={index} className="flex gap-2">
            <input type="radio" disabled />
            <label>{opt.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
