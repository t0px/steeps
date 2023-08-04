export const getUploads = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/uploads", {
      cache: 'no-store',
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

