const Appointment = require( "../models/Appointment" )

module.exports = async ( req, res ) => {
    let appointment = await Appointment.find({date: req.params.date})

    if(appointment) {
        res.status( 200 ).send( {
          appointment
        })
      }
}
