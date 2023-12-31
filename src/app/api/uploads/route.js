import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    const uploads = await Upload.find({}).populate("author");
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

// Delete all posts
export const DELETE = async () => {
  try {
    await connectDB();
    const uploads = await Upload.find({ title: /lana/i }).deleteMany();
    return new NextResponse(
      "All uploads have been deleted from the database.",
      {
        status: 201,
      }
    );
  } catch (error) {
    return new NextResponse(
      `Error processing your DELETE request. ERROR: ${error}`,
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req, res) => {
  const body = await req.json();
  const new_upload = new Upload(body);

  try {
    await connectDB();
    await new_upload.save();
    console.log("Uploaded:", new_upload);
    return new NextResponse(JSON.stringify(new_upload), { status: 200 });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return new NextResponse(JSON.stringify(errors), {
        status: 400,
      });
    }
    return new NextResponse("Couldn't connect to the database.", {
      status: 500,
    });
  }
};
