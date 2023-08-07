import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const body = await req.json();
    const { search, page } = body;
    console.log("Request sent:", req)
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${search}&page=${page}`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      }
    );
    const data = await res.json();
    console.log(data)
    return new NextResponse(JSON.stringify(data), { status: 200 });

  } catch (error) {
    return new NextResponse(`Error ${error}`, {status: 500});
  }
};
