"use client"

import { useState } from "react";
import { addVoteToUpload } from "@/services/api/uploads/puts";
import { useParams } from "next/navigation";
import { getSingleUpload } from "@/services/api/uploads/gets";

const PollView = ({post}) => {

  const handleVote = async (option, user, id) => {
    await addVoteToUpload(option, user, id)
    await getSingleUpload(id)
    setIsVoted(true);
  }

  const user = {
    username: "t0p",
    email: "meir.webs@gmail.com"
  }

  const [optionSelected, setOptionSelected] = useState('');
  const [isVoted, setIsVoted] = useState(false);
  const params = useParams();
  const id = params.upload_id;

  return (
    <div className="flex flex-col gap-2 items-start">
      {post.options.map((opt, index) => (
        <div key={index} className="flex gap-2 items-center">
          <input type="radio"value={opt.title} disabled={isVoted} name="options" onClick={(e) => setOptionSelected(e.target.value)}/>
          <label>{opt.title} - {opt.users_selected.length}</label>
        </div>
      ))}
      {!isVoted ? (
      <button
      onClick={() => handleVote(optionSelected, user, id)}
        type="button"
        className="bg-blue-200 mb-2 hover:bg-blue-300 w-fit capitalize border rounded-full  transition cursor-pointer
               border-blue-500/25  px-4 py-1"
      >
        Vote
      </button>
      ) : (
        `You voted for ${optionSelected}.`
      )}

    </div>
  );
}
 
export default PollView;