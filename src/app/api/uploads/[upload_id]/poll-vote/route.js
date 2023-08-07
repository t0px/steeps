import Upload from "@/models/Upload";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// edit post & update
export const PUT = async (req, { params }) => {
  const body = await req.json();
  const { upload_id } = params;
  if (!upload_id) {
    return new NextResponse("Couldn't find ID.", { status: 404 });
  }
  try {
    await connectDB();
    if (!body) {
      return new NextResponse("Request body is missing.", { status: 400 });
    }
    const updated_upload_vote = await Upload.findOneAndUpdate(
      { _id: upload_id, "options.title": body.option },
      { $push: { "options.$.users_selected": body.user } },
      { new: true }
    );

    if (!updated_upload_vote) {
      return new NextResponse(
        "Document with these credentials does not exist!",
        { status: 400 }
      );
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
