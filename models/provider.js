const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  id: { type: Number },
  image:     {  
    type: String, 
    required: false
},
  name: { type: String, required: true },
  specialties: { type: String, required: true },
  contact: { type: String, required: false },
  location: { type: String, required: false },
  psychology: { type: String, required: true },
  matrix: { type: Array, required: true }
},
  { collection: 'providers' }
);

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;