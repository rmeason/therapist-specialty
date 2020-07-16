const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: {type: Number},
  name: { type: String, required: true },
  specialties: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  matrix: { type: Array, required: false }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;