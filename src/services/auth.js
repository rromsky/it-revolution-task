import axios from "axios";
// import Toast from "react-toastify";
import { API_URL } from "../http";

const setToken = (token) => {
  localStorage.setItem("token", token);
};
const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const registerUser = async (email, password) => {
  try {
    await axios.post(API_URL + "/users/register/", { email, password });
    const data = await loginUser(email, password);
    const { access_token, refresh_token } = data;
    await axios.post(
      API_URL + "/aquarium/aquarium/",
      {},
      {
        headers: {
          Authorization: access_token,
        },
      }
    );

    setToken(access_token);
    setRefreshToken(refresh_token);
    return access_token;
  } catch (e) {
    console.log(e);
    // Toast.error("Registration error");
  }
};

export const loginUser = async (email, password) => {
  try {
    const data = await axios.post(API_URL + "/users/login/", {
      email,
      password,
    });
    console.log(data);
    setToken(data.data.access_token);
    setRefreshToken(data.data.refresh_token);
    return data.data;
  } catch (e) {
    console.log(e);
    // Toast.error("Login error");
  }
};

export const logoutUser = async () => {
  try {
    return localStorage.removeItem("token");
  } catch (e) {
    console.log(e);
  }
};

export const checkAuth = async () => {
  try {
    return localStorage.getItem("token");
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const updateToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const data = await axios.post(API_URL + "/users/access_token/", {
      refresh_token: refreshToken,
    });
    setToken(data.data.access_token);
    setRefreshToken(data.data.refresh_token);
    return data.data.access_token;
  } catch (e) {
    console.log(e);
  }
};
