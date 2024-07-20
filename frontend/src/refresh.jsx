import axios from "axios";
import config from "./config";

const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if (refresh_token) {
    try {
      const { data } = await axiosInstance.post("/api/user/token/refresh/", {
        refresh: refresh_token,
      });
      // Store new tokens in local storage
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      // Update default headers to use the new access token
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access}`;
      console.log("Token refreshed successfully");
      return data.access;
    } catch (error) {
      console.log("Error refreshing token:", error);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login"; 
      return null;
    }
  } else {
    window.location.href = "/login"; 
    return null;
  }
};

setInterval(refreshToken, 40 * 60 * 1000);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && (error.response.status === 500 || error.response.status === 501)) {
      window.location.href = "/#Contact";
      alert("We understand you may be experiencing technical difficulties. Our dedicated support team is available for help.");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
