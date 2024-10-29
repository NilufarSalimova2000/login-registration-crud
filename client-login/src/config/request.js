import axios from "axios";
import { loadState } from "./storage";

const request = axios.create({ baseURL: import.meta.env.VITE_APP_URL });

request.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${loadState("user")?.accessToken}`;

    return config;
});

export { request };