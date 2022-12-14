const DriveTest = require("../models/DriveTest");

module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  const driveTest = await DriveTest.findOne({ _id: req.session.userId }).populate("appointmentID")
  let isError = false;
  let errorMessage = "";
  res.render("g2", {isError, errorMessage, driveTest});
};
