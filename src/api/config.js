// api/config.js
import axios from "axios";

// Base URL
export const baseUrl = "http://localhost:8000";

// ------------------------
// Public Axios instance
// ------------------------
export const axiosPublic = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

// ------------------------
// Private Axios instance (Bearer token)
// ------------------------
export const axiosPrivate = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor to attach token from localStorage
axiosPrivate.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// ------------------------
// Public FormData Axios
// ------------------------
export const axiosPublicFormData = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

// ------------------------
// Private FormData Axios
// ------------------------
export const axiosPrivateFormData = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

// Attach Bearer token to private FormData requests
axiosPrivateFormData.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});