const Appointment = require( "../models/Appointment" )

module.exports = async ( req, res ) => {
  if(req.body.date && req.body.option1){
    const appointment = await Appointment.findOne({ time: req.body.option1, date: req.body.date });
    let isError = false;
    if(!appointment){
        await Appointment.create({
            time: req.body.option1,
            date: req.body.date,
            isTimeSlotAvailable: true,
          });
    }else {
      isError = true;
    }
    res.render("appointment", {isError});
  }else {
    let isError = true;
    let errorMessage = "Please add all details"
    res.render("appointment", {isError, errorMessage});
  }
  
}
