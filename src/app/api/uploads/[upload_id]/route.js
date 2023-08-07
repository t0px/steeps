import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// get single post
export const GET = async (req, { params }) => {
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

//TODO: DO THIS WHEN YOU COME BACK THX

// edit post & update
export const PUT = async (req, { params }) => {
  const body = await req.json();
  const { upload_id } = params;
  try {
    await connectDB();
    if (!body) {
      return new NextResponse("Request body is missing.", { status: 400 });
    }
    const updated_upload = await Upload.findByIdAndUpdate({_id: upload_id}, {
     ...body, edited: true
    }, {new: true});

    return new NextResponse(`Updated ID: ${upload_id}! Now it's: ${updated_upload}. You sent us ${body.title}`, { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
