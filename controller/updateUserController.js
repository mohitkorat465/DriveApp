const DriveTest = require("../models/DriveTest");
const Appointment = require("../models/Appointment")

module.exports = async (req, res, error) => {
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  const driveTest1 = await DriveTest.find({
    _id: req.session.userId,
    });
    await DriveTest.findOneAndUpdate(
      { _id: req.session.userId },
      {
        firstname: req.body.firstname ? req.body.firstname : driveTest1[0].firstname,
        lastname: req.body.lastname ? req.body.lastname : driveTest1[0].lastname,
        age: req.body.age ? req.body.age : driveTest1[0].age,
        sin: req.body.sin ? req.body.sin : driveTest1[0].sin,
        car_details: {
          make: req.body.make ? req.body.make : driveTest1[0].car_details.make,
          model: req.body.model ? req.body.model : driveTest1[0].car_details.model,
          year: req.body.year ? req.body.year : driveTest1[0].car_details.year,
          platno: req.body.platno ? req.body.platno : driveTest1[0].car_details.platno,
        },
      }
    );
    
  if (req.session.userId) {
    let isError = false;
    let errorMessage = "";
    const driveTest = await DriveTest.findOne({ _id: req.session.userId }).populate("appointmentID")
    if(req.body.appointmentType == "G"){
      res.render("g", {isError, errorMessage, driveTest});
    }else {
      res.render("g2", {isError, errorMessage, driveTest});
    }
  } else {
    res.redirect("/");
  }
};
