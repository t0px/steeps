import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const new_user = new User(body);

  try {
    await connectDB();
    await new_user.save();
    console.log("Uploaded:", new_user);
    return new NextResponse("New user has been saved to the database.", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(`Error processing your request. ERROR: ${error}`, {
      status: 500,
    });
  }
};
