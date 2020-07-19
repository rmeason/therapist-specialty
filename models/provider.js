const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: { type: Number },
  // image: { type: File, require: false },
  name: { type: String, required: true },
  specialties: { type: String, required: true },
  contact: { type: String, required: false },
  location: { type: String, required: false },
  matrix: { type: Array, required: false }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;