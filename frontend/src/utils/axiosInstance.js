import axios from "axios";
import jsCookie from "js-cookie";
import jwt_decode from "jwt-decode"
import dayjs from "dayjs"

const BASE_URL = "https://flashbooking.herokuapp.com/api";
// const BASE_URL = "http://localhost:5000/api";
const ACCESS_TOKEN = jsCookie.get("access");
// const REFRESH_TOKEN = jsCookie.get("refresh");

export const roomRequest = axios.create({
  baseURL: BASE_URL,
});

export const roomRequestPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${ACCESS_TOKEN}` },
});

const refreshToken = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/refresh`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


roomRequestPrivate.interceptors.request.use(
  async (config) => {
    const decodedToken = jwt_decode(ACCESS_TOKEN);
    const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;
    if (isExpired) {
      const data = await refreshToken();
      jsCookie.set("access", data.accessToken);
      jsCookie.set("refresh", data.refreshToken);
      config.headers.authorization = `Bearer ${data.accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
