import axios from "axios";

const BASE_URL = "https://flash-book1ng.herokuapp.com/api";

export const roomRequest = axios.create({
  baseURL: BASE_URL,
});
