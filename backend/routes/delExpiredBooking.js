import Booking from "../models/bookingModel.js";
export const deleteExpiredBookings = async () => {
  try {
    const bookings = await Booking.find();

    for (let booking of bookings) {
      const endDate = new Date(booking.endDate).getTime();
      if (endDate < new Date().getTime() - 86400000) {
        await Bookings.findOneAndDelete({ confirmation: booking.confirmation });
      }
    }
    return bookings;
  } catch (error) {
    console.log(error);
  }
};
