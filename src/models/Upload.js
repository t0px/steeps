import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const uploadSchema = new Schema({
   title: {
    type: String,
    required: true
   },
   content: {
    type: String,
    required: true
   },
   authorId: {
    type: String,
    required: true
   },
   type: {
    type: String,
    required: true
   },
   likes: {
    type: Number,
    required: true
   },
   comments: {
    type: Array
   },
});

export default mongoose.models.Upload || mongoose.model('Upload', uploadSchema);
