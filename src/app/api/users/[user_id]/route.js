import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// get single user
export const GET = async (req, { params }) => {
  const { user_id } = params;
  try {
    await connectDB();

    const user = await User.findById(user_id);
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
