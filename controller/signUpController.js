const DriveTest = require("../models/DriveTest");

module.exports = async (req, res, error) => {
  let checkVal = {
    passConf: false,
    passInval: false,
  };
  if (req.body.password == req.body.repPassword) {
    await DriveTest.create({
      username: req.body.username,
      password: req.body.password,
      userType: req.body.type,
    });
  } else {
    checkVal.passConf = true;
  }
  res.render("login", { checkVal });
};
