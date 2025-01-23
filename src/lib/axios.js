import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://backend-chat-psi-lyart.vercel.app"
      : "/api",
  withCredentials: true,
});
