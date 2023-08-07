import mongoose from "mongoose";
import User from "./User";

const Schema = mongoose.Schema;

// const replySchema = new Schema({
//   authorId: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   likes: {
//     type: Number,
//     required: true,
//   },
// }, {timestamps: true});



// const likeSchema = new Schema({
//   authorId: {
//     type: mongoose.SchemaTypes.ObjectId,
//     required: true
//   }
// })

const uploadSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minLength: [10, "Title should be at least 10 characters long."],
      maxLength: [120, "Title should be no more than 120 characters long."]
    },
    content: {
      type: String,
    },
    banner: {
      type: Object,
      required: [true, "Banner is required."],
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: User,
      required: true,
    },
    type: {
      type: String,
      required: [true, "Type is required."],
    },
    edited: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    // likes: {
    //   type: Array,
    //   default: [],
    // },
    // comments: [{
    //   type:mongoose.SchemaTypes.ObjectId,
    //   ref: Comment
    // }],
  },
  { timestamps: true }
);

export default mongoose.models.Upload || mongoose.model("Upload", uploadSchema);
