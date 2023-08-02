import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    const uploads = await Upload.find({});
    if (uploads.length === 0) {
      return new NextResponse("Couldn't find data.", { status: 500 });
    }
    return new NextResponse(JSON.stringify(uploads), { status: 200 });
  } catch (error) {
    return new NextResponse("Couldn't connect to the database.", {
      status: 500,
    });
  }
};

export const POST = async (req) => {
  const body = await req.json();
  const newUpload = new Upload(body);

  try {
    await connectDB();
    await newUpload.save();
    return new NextResponse("New upload has been saved to the database.", { status: 201 });
  } catch (error) {
    return new NextResponse("Couldn't connect to the database.", {
      status: 500,
    });
  }
};
