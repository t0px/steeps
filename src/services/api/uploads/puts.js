import { redirect } from "next/navigation";
import { mutate } from "swr";
import useSWR from 'swr';

export const addVoteToUpload = async (option, user, id) => {

  const fetcher = (url) => fetch(url).then((r) => r.json());

  try {
    const res = await fetch(`/api/uploads/${id}/poll-vote`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({option, user}),
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("Failed to process response from server.");
    }
    return res.json();
  } catch (error) {
    throw new Error("Error request. Bad Promise", { status: 500 }, error);
  }
};
