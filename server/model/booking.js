const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({
  propertyId: String,
  guest: {
    adults: Number,
    children: Number,
    infants: Number,
  },
  date: {
    start: Date,
    end: Date,
  },
});

const Booking = model('Booking', bookingSchema);

module.exports = Booking;
