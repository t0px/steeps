import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  const { upload_id } = params;
  try {
    await connectDB();

    const upload = await Upload.findById(upload_id).populate("author");
    return new NextResponse(JSON.stringify(upload), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't connect to the database.", {
      status: 500,
    });
  }
};
