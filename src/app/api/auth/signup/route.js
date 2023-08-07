import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { connectDB } from "@/utils/connectDB";

export const POST = async (req) => {
  const {username, email, password, avatar} = await req.json();
  if (!username || !email || !password) {
    return new NextResponse("Some fields are empty.", {status: 400})
  }
  try {
    await connectDB();

    //implement check for user exist but not here

    const hashedPassword = await bcrypt.hash(password, 8)
    const new_user = new User({
      username,
      email,
      password: hashedPassword,
      role: "user",
      status: "active",
      avatar
    });


    await new_user.save();
    return new NextResponse("Account has been created.", {status: 201})
  } catch (error) {
    return new NextResponse(error.message, {status: 500})
  }
}