import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { username } = req.json();
  try {
    await connectDB();

    const user = User.findOne({ username });
    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

//update username
export const PUT = async (req) => {
  const { new_name, user_id } = await req.json();
  try {
    await connectDB();
    if (!new_name || !user_id) {
      return new NextResponse.json(
        {
          message: "Some of the request body properties is missing!",
        },
        { status: 400 }
      );
    }
    const updated_user = await User.findByIdAndUpdate(user_id, {
      username: new_name
    });
    if (!updated_user) {
      return new NextResponse("Could not find user.", {status: 404})
    }
    return new NextResponse(`New User Updated: ${updated_user}`, {status: 201})
  } catch (error) {
    return new NextResponse.json({ message: error.message }, { status: 500 });
  }
};
