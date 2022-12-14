const DriveTest = require("../models/DriveTest");
const Appointment = require("../models/Appointment")

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  const {firstname, lastname, age,sin,appointmentType, make, model, year, platno, option1, date } = req.body

  if(firstname && lastname && age && sin && appointmentType && make && model && year && platno && option1 && date){
    const appointment = await Appointment.findOne({ time: option1, date: date });
    await Appointment.findOneAndUpdate(
        { _id: appointment._id },
        {
            isTimeSlotAvailable: false
        }
    );
    await DriveTest.findOneAndUpdate(
      { _id: req.session.userId },{
      ...req.body,
      appointmentID: appointment._id,
      car_details: {
        make: make,
        model: model,
        year: year,
        platno: platno,
      },
    });
    if (req.session.userId) {
      let isError = false;
      let errorMessage = "";
      const driveTest = await DriveTest.findOne({ _id: req.session.userId }).populate("appointmentID")
      if(appointmentType == "G"){
        res.render("g", {isError, errorMessage, driveTest});
      }else {
        res.render("g2", {isError, errorMessage, driveTest});
      }
    } else {
      res.redirect("/");
    }
  }else {
    let isError = true;
      let errorMessage = "Pleae fill all data.";
      const driveTest = await DriveTest.findOne({ _id: req.session.userId }).populate("appointmentID")
      if(appointmentType == "G"){
        res.render("g", {isError, errorMessage, driveTest});
      }else {
        res.render("g2", {isError, errorMessage, driveTest});
      }
  }
  
};
