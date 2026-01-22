import axios from "axios";

const API = axios.create({
  baseURL: "https://foundit-backend-vk9b.onrender.com",
});

// Attach JWT automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
