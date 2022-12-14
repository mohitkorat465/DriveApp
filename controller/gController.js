const DriveTest = require("../models/DriveTest");

module.exports = async (req, res) => {
  const driveTest = await DriveTest.findOne({ _id: req.session.userId }).populate("appointmentID")
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  let isError = false;
  let errorMessage = "";
  res.render("g", {isError, errorMessage, driveTest});
};
