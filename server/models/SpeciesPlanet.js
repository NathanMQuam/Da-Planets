import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId

const SpeciesPlanet = new Schema(
   {
      species: { type: ObjectId, ref: "Species", required: true },
      planet: { type: ObjectId, ref: "Planet", required: true }
   },
   { timestamps: true, toJSON: { virtuals: true } }
);

export default SpeciesPlanet;
