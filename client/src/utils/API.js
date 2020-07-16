import axios from "axios";

export default {
    getId: function(id) {
        return axios.get("../components/pages/Providers.json");
    },
    getSpecialties: function(specialties) {
        return axios.get("../components/pages/Providers.json");
    },
    getName: function(name) {
        return axios.get("../components/pages/Providers.json");
    }
}