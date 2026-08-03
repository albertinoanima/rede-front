import axios from "axios";

const apiPort = process.env.API_PORT ?? "4001";
const apiHost = process.env.API_HOST ?? "http://localhost";
const apiBaseUrl =
  process.env.API_BASE_URL ?? `${apiHost}:${apiPort}`;

export const api = axios.create({
  //sbaseURL: apiBaseUrl,
  baseURL: "https://rede-back.vercel.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth.token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const apiRoutes = {
  signup: process.env.API_SIGNUP_PATH ?? "/auth/signup",
  login: process.env.API_LOGIN_PATH ?? "/auth/login",
  signupWithGoogle:
    process.env.API_SIGNUP_GOOGLE_PATH ?? "/auth/google/signup",
  loginWithGoogle:
    process.env.API_LOGIN_GOOGLE_PATH ?? "/auth/google/login",
};