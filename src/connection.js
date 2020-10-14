import axios from "axios";

const API_INSTANCE = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default API_INSTANCE;