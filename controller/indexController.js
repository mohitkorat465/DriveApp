module.exports = async (req, res) => {
  loggedIn = req.session.userId;
  loggedInType = req.session.userType;
  res.render("index");
};
