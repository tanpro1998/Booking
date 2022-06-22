import { message } from "antd";
import { roomRequest } from "../utils/axiosInstance";
import jsCookie from "js-cookie";
import { allRooms } from "./reducers/roomSlice";
import { getBooking, delBooking } from "./reducers/existingSlice";
import { availableBooking } from "./reducers/bookingSlice";
import { detailBooking, detailRoom } from "./reducers/detailSlice";
import { confirm } from "./reducers/confirmSlice";

export const userRegister = async (reqObj, navigate) => {
  try {
    await roomRequest.post("/auth/register", reqObj);
    message.success("Register Success");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  } catch (err) {
    console.log(err);
    message.error("Something went wrong");
  }
};

export const userLogin = async (reqObj) => {
  try {
    const res = await roomRequest.post("/auth/login", reqObj, {
      withCredentials: true,
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  } catch (err) {
    console.log(err);
    message.error("Wrong username or password");
  }
};

export const userLogout = async () => {
  localStorage.clear();
  jsCookie.remove("access");
  jsCookie.remove("refresh");
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

export const getAllRooms = async (dispatch) => {
  try {
    const res = await roomRequest.get("/rooms");
    dispatch(allRooms(res.data));
  } catch (err) {
    console.log(err);
  }
};
// Lấy thông tin booking
export const getSingleBooking = async (id, dispatch) => {
  try {
    const res = await roomRequest.post("/bookings", id);
    dispatch(getBooking(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const roomDetails = async (data, dispatch) => {
  try {
    dispatch(detailRoom(data));
  } catch (err) {
    console.log(err);
  }
};

export const bookingDetails = async (data, dispatch) => {
  try {
    dispatch(detailBooking(data));
  } catch (err) {
    console.log(err);
  }
};
export const getAllAvailable = async (params, dispatch) => {
  try {
    const res = await roomRequest.post("/bookings/available", params);
    dispatch(availableBooking(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const createBooking = async (details, dispatch) => {
  try {
    const newBooking = {
      ...details.formData,
      ...details.details.booking,
      ...details.details.room,
    };

    const res = await roomRequest.post("/bookings/create", newBooking);
    dispatch(confirm(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteBooking = async (id, dispatch) => {
  try {
    await roomRequest.post("/bookings/delete", id);
    dispatch(delBooking(id));
  } catch (error) {
    console.log(error);
  }
};
