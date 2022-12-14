const DriveTest = require("../models/DriveTest");

module.exports = async (req, res) => {
    loggedIn = req.session.userId;
    loggedInType = req.session.userType;
    DriveTest.find( { appointmentID: { $ne: null }, testResult: { $ne: null } })
    .populate( "appointmentID", { match: { isTimeSlotAvailable : false } } )
    .exec( ( error, data ) => {
        if(data.length > 0 ) {
            
            res.render( "displayResult", {
                isError: false,
                errorMessage: "",
                data: data,
            })
        } else {
            res.render( "displayResult", {
                isError: true,
                errorMessage: "No result found",
                data: null,
            })
        }

    } )
};