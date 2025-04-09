const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const propertySchema = new Schema({
  name: { type: String },
  proptype_id: { type: ObjectId, ref: "proptype" },

}, { versionKey: false });

module.exports =
  mongoose.models.property || mongoose.model("property", propertySchema);
