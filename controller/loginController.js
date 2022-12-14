module.exports = (req, res) => {
  let checkVal = {
    passConf: false,
    passInval: false,
  };
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  res.render("login", { checkVal });
};
