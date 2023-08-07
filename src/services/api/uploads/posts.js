import { redirect } from "next/navigation";

export const saveUpload = async (formData, e) => {

  e.preventDefault();
  try {
    const res = await fetch(`http://localhost:3000/api/uploads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      next: { revalidate: 10 },
    });

    return res.json();
  } catch (error) {
    return new Error("Couldn't estabilsh connection with the database.", {status: 400});
  }
};

export const getUploadsByUser = async (user_id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/uploads/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  } catch (error) {}
};

