import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    await connectDB();

    if (req.method === "POST") {
      if (!req.body) {
        return new NextResponse("Recevied no data.", { status: 400 });
      }
      const body = await req.json();
      const userExists = await User.findOne({ email: body.email });
      if (userExists) {
        return new NextResponse("User with that email/name already exists.", { status: 409 });
      } else {
        if (body.password.length < 6) {
          return new NextResponse(
            "Password should be at least 6 characters long",
            { status: 409 }
          );
        }
        const hashedPassword = await hash(body.password, 12);
        const new_user = new User({...body, password: hashedPassword, role: "user", status: "active"});
        await new_user.save();
        return new NextResponse("User has been successfully created.", {status: 201});
      }
    } else {
      return new NextResponse("Method not allowed.", { stauts: 405 });
    }
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
