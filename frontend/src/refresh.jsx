import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Replace with your actual domain and port
});

// Function to refresh tokens
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
    } catch (error) {
      console.log("Error refreshing token:", error);
      // Handle refresh token expiration (e.g., redirect to login)
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login"; // Redirect to login page
    }
  } else {
    window.location.href = "/login"; // Redirect to login page if no refresh token is found
  }
};

// Set an interval to refresh the token every 4 minutes
setInterval(refreshToken, 40 * 60 * 1000);

// Add a request interceptor to include the access token in headers
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

// Add a response interceptor to handle token refresh on 401 error
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired access token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh_token = localStorage.getItem("refresh_token");
      try {
        // Try refreshing the access token
        const { data } = await axiosInstance.post("/api/user/token/refresh/", {
          refresh: refresh_token,
        });
        // Store the new access token in local storage
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh); // Update refresh token as well
        // Update the default headers with the new access token
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.access}`;
        // Retry the original request with the new access token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.log("Refresh token expired or blacklisted, please login again");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
