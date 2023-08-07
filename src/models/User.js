import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
    minLength: [4, "Username name should be atleast 4 characters long."],
    maxLength: [20, "Username should be maximum of 20 characters long."]
  },
  email: {
    type: String,
    required: [true, "Email address is required."],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address."],
  },
  avatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: false,
  },
  status: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
