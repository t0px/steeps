import mongoose from "mongoose";

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

// const commentSchema = new Schema({
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
//   // replies: {
//   //   type: [replySchema],
//   // },
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
      required: true,
    },
    content: {
      type: String,
    },
    banner: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    // likes: {
    //   type: [likeSchema]
    // },
    // comments: {
    //   type: [commentSchema]
    // }
  },
  { timestamps: true }
);

export default mongoose.models.Upload || mongoose.model("Upload", uploadSchema);
