import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const Species = new Schema(
   {
      title: { type: String, required: true },
      description: { type: String, required: true },
      planet: { type: ObjectId, ref: "Planet", required: true }
   },
   { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;
