export const getSingleUser = async (user_id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${user_id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
