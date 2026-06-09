import axios from "axios";

const api = axios.create({
    baseURL: "https://techmarket-api-niaj.onrender.com/api"
});

export default api;