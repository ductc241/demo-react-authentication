import axios, { AxiosError } from "axios";
import authServices from "./auth";

axios.defaults.withCredentials = true

const unauthorizedRequest = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json"
  }
});

const authorizedRequest = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json"
  },
})

authorizedRequest.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`
  }

  return axiosConfig;
}, (error) => {
  return Promise.reject(error);
});

authorizedRequest.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  // bat loi jwt het han
  // => goi toi api refresh_token để lấy access_token mới
  // => lưu access_token mới vào local storage
  // => tạo lại request 1 lần nữa với access_token mới
  if (error.response && error.response.status === 401 && error.response.data === "Unauthorized") {
    const { data } = await authServices.refreshToken();

    localStorage.setItem("access_token", data.access_token);
    return authorizedRequest(error.config)
  }

  // bat loi refresh_token het han 
  //  => xóa access_token trong local storage
  //  => PrivateRoute ko lấy đc access_token => redirect to login
  if (error.response && error.response.status === 401 && error.response.data.message === "Session Expired") {
    localStorage.removeItem("access_token");
  }

  return Promise.reject(error);
});

export { unauthorizedRequest, authorizedRequest }