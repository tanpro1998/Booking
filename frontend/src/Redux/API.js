import { message } from "antd";
import { publicRequest, roomRequest } from "../Utils/axiosInstance";
import jsCookie from "js-cookie";
import { allRooms, oneRoom } from "../Redux/reducers/roomSlice";
import { getBooking, delBooking } from "./reducers/existingSlice";
import { availableBooking } from "./reducers/bookingSlice";
import { detailBooking, detailRoom } from "./reducers/detailSlice";
import { confirm } from "./reducers/confirmSlice";

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

export const getAllRooms = () => async (dispatch) => {
  try {
    const res = await roomRequest.get("/rooms");
    dispatch(allRooms(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getOneRooms = (url) => async (dispatch) => {
  try {
    const res = await roomRequest.get(`/rooms/${url}`);
    dispatch(oneRoom(res.data));
  } catch (err) {
    console.log(err);
  }
};
// Lấy thông tin booking
export const getSingleBooking = (id) => async (dispatch) => {
  try {
    const res = await roomRequest.post("/bookings", id);
    dispatch(getBooking(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const RoomDetails = (data) => async (dispatch) => {
  try {
    dispatch(detailRoom(data));
  } catch (err) {
    console.log(err);
  }
};

export const BookingDetails = (data) => async (dispatch) => {
  try {
    dispatch(detailBooking(data));
  } catch (err) {
    console.log(err);
  }
};
export const getAllAvailable = (params) => async (dispatch) => {
  try {
    const res = await roomRequest.post("/bookings/available", params);
    dispatch(availableBooking(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const createBooking = (details) => async (dispatch) => {
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

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await roomRequest.post("/bookings/delete", id);
    dispatch(delBooking(id));
  } catch (error) {
    console.log(error);
  }
};
