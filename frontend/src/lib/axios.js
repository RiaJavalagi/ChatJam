import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://chat-jam-azure.vercel.app/api": "https://chatjam-o3i6.onrender.com/api",
    withCredentials: true,
});