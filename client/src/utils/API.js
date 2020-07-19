import axios from "axios";

export default {
  // Gets all providers
  getProviders: function() {
    return axios.get("/api/providers");
  },
  // Gets the provider with the given id
  getProvider: function(id) {
    return axios.get("/api/providers/" + id);
  },

  getProvider: function(specialties) {
    return axios.get("/api/providers/" + specialties);
  },

  // Deletes the provider with the given id
  deleteProvider: function(id) {
    return axios.delete("/api/providers/" + id);
  },
  // Saves a provider to the database
  saveProvider: function(providerData) {
    console.log(providerData)
    return axios.post("/api/providers", providerData);
  }
};