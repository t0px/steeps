import { connectDB } from "@/utils/connectDB"

export const updateUsername = async (new_name, user_id) => {
  try {
    const res = await fetch(`/api/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({new_name, user_id})
    })
    if (!res.ok) {
      return new Error("Error with response");
    }
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}