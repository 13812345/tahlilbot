import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// interceptors if needed
// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => Promise.reject(error.response?.data || error.message)
// );

// http.interceptors.request.use((config) => {
//   const userId = localStorage.getItem("user_id") || 1;
//   if (userId) {
//     config.headers["x-user-id"] = Number(userId);
//   }
//   return config;
// });

export default http;
