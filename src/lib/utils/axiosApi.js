import axios from 'axios';
import cookie from "js-cookie";


export const  urlfull = 'http://localhost:8000'
export const config = {
    baseURL: `${urlfull}`,
    headers: {'Content-Type': 'application/json'},
};

export const axiosApi = axios.create(config);

axiosApi.interceptors.request.use (
    async function (config) {
        let token = cookie.get('token') ? cookie.get('token') : '';
        console.log('Cookie', token)

        if(token) config.headers.Authorization = `JWT ${token}`;

        return config;
    },
    function (error) {
        return Promise.reject (error);
    }
);

// Add a response interceptor
axiosApi.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  //console.log('Aqui interceptando el error', error, error?.response?.data)
      if(/*error.response?.status === 403 || */error?.response?.data?.message === '401 Unauthorized'){
        window.location.href = "/security/login";
      }
  return Promise.reject(error);
});

export const resetConfig = async () => {
};

export const setConfigAxios = async (token) => {
};


export const API = {
  SECURITY: {
    LOGIN: "/security/api/v1/token/",
  },
  VIDEO: {
    VIDEO_LIST: "/video-transmission/api/v1/video/",
  },
};

export default axiosApi;
