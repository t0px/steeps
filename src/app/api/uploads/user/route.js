import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const {user_id} = await req.json();
  try {
    await connectDB();
    const uploads = await Upload.find({author: user_id}).populate("author");
    if (!uploads) {
      return new NextResponse("You haven't uploaded a post yet.", { status: 500 });
    }
    if (uploads.length === 0) {
      return new NextResponse("Couldn't find data.", { status: 500 });
    }
    return new NextResponse(JSON.stringify(uploads), { status: 200 });
  } catch (error) {
    return new NextResponse(`Couldn't connect to the database. ${error}`, {
      status: 500,
    });
  }
};
