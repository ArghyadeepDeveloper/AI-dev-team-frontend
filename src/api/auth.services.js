import { axiosPublic } from "./config";

export const registerCompany = (payload) => {
    return axiosPublic.post("/register-company", payload);
};

export const loginUser = (payload) => {
    return axiosPublic.post("/login", payload);
};