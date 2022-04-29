import { message } from "antd";
import { publicRequest } from "../Utils/axiosInstance";
import jsCookie from "js-cookie";

export const userRegister = (reqObj) => async () => {
  try {
    await publicRequest.post("/auth/register", reqObj);
    message.success("Register Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = (reqObj) => async () => {
  try {
    const res = await publicRequest.post("/auth/login", reqObj);

    localStorage.setItem("user", JSON.stringify(res.data));
    jsCookie.set("access", res.data.accessToken);
    jsCookie.set("refresh", res.data.refreshToken);
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Wrong username or password");
  }
};
