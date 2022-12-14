const Appointment = require("../models/Appointment")

module.exports = async (req, res) => {
    loggedIn = req.session.userId;
    loggedInType = req.session.userType;
    let isError = false;
    let errorMessage = ""
    res.render("appointment", {isError, errorMessage});

};