import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useUserData } from "UserDataContext";
import useToast from "./useToast";
import { useLogout } from "./useLogout";

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

export const useTotalBalance = () => {
  const { userData } = useUserData();
  const { showToast } = useToast();
  const { logout } = useLogout();
  return {
    ...useQuery({
      queryKey: ["total_balance", "get"],
      queryFn: async () => {
        const result = await instance.post(`/spot/balance`, {
          userData: {
            _address: userData.wallet,
          }
        }).catch((err) => {
          console.log(err, "ERROR");
          if (
            err?.response?.status === 403 ||
            err?.response?.status === 401
          ) {
            showToast('Token is Expired!', 'error');
            logout();
          }
        });
        return result;
      }
    })
  };
}
