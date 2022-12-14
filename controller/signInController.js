const DriveTest = require("../models/DriveTest");
const bcrypt = require("bcrypt");
module.exports = async (req, res) => {
  let checkVal = {
    passConf: false,
    passInval: true,
  };
  // get account from database
  const account = await DriveTest.findOne({ username: req.body.username });
  if (!account || !bcrypt.compareSync(req.body.password, account.password)) {
    // authentication failed
    res.render("login", { checkVal });
  } else {
    // authentication successful
    req.session.userId = account._id;
    req.session.userType = account.userType;
    loggedIn = req.session.userId;
    loggedInType = req.session.userType;
    res.render("index");
  }
};
