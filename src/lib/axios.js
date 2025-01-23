import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chat-app-backend-six-sigma.vercel.app/api"
      : "/api",
  withCredentials: true,
});
