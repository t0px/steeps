import { redirect } from "next/navigation";

export const getUploads = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/uploads", {
      next: { revalidate: 10 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  } catch (error) {}
};

export const getSingleUpload = async (upload_id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/uploads/${upload_id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  } catch (error) {}
};

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

    if (!res.ok) {
      throw new Error("Failed to process response from server.");
    }
    return res.json();
  } catch (error) {
    throw new Error("Error request. Bad Promise", { status: 500 }, error);
  }
};
