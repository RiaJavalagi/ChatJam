import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api": "https://chatjam-o3i6.onrender.com/api",
    withCredentials: true,
});