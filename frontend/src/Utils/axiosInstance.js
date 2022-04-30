import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const roomRequest = axios.create({
  baseURL: "https://suay-resort-api.herokuapp.com/",
});
