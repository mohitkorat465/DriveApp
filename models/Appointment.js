const mongoose = require( "mongoose" )

const AppointmentSchema = new mongoose.Schema( {
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  isTimeSlotAvailable: {
    type: Boolean
  }
})

const Appointment = mongoose.model( "Appointment", AppointmentSchema )

module.exports = Appointment
