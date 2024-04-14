import axios from "axios";

export const API_URL = "https://it-revolution-24.onrender.com";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzk5ODU2NTUtMDVkNi00MGMzLTg2NzYtM2JkYmViMWE1MmFlIiwiZW1haWwiOiJycm9tYW5rbzE1NEBnbWFpbC5jb20iLCJ1c2VyX2ZpcnN0X25hbWUiOiIiLCJ1c2VyX2xhc3RfbmFtZSI6IiIsImV4cCI6MTcxMzEzMTY0MiwidHlwZSI6ImFjY2VzcyJ9.ZlMgzD0e9SH6NCAQ4rasqeUskOFy_dt2tARxb9PCo2Y`;
  return config;
});

export default $api;
