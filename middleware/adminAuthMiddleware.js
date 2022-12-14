const DriveTest = require("../models/DriveTest");

module.exports = (req, res, next) => {
    loggedIn = req.session.userId;
    loggedInType = req.session.userType;

    if( !req.session.userId ) {
        return res.redirect( "/login" )
    }
    DriveTest.findById(req.session.userId, (error, user) => {
        if (error || !user) {
        return res.redirect("/");
        }
        if( user.userType !== 'Admin' ) {
        return res.redirect( "/" )
        }
        next();
    });
};
