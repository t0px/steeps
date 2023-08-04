export const getPhotos = async (searchInput) => {
  try {
    const res = await fetch(`http://localhost:3000/api/pexels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: searchInput }),
    });
    if (!res.ok) {
      throw new Error("Response from Pexels API is doomed.");
    }
    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error fetching photos from backend:", error);
  }
};
