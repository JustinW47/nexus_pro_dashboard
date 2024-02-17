import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/api'
});

// Set the Authorization header with the token
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function useSetting() {
  return {
    ...useQuery({
      queryKey: ["setting-list"],
      queryFn: async () => {
        const result = await instance.get(`/setting/`)
          .catch((err) => {
            console.log(err);
          });
        return result?.data;
      }
    })
  };
}
