require("dotenv").config();
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = new express();
const mongoose = require("mongoose");
const indexController = require("./controller/indexController");
const gController = require("./controller/gController");
const g2Controller = require("./controller/g2Controller");
const loginController = require("./controller/loginController");
const logoutController = require("./controller/logoutcontroller");
const saveUserController = require("./controller/saveUserController");
const signInController = require("./controller/signInController");
const signUpController = require("./controller/signUpController");
const updateController = require("./controller/updateUserController");
const appointmentController = require("./controller/appointmentController");
const appointmentSaveController = require("./controller/appointmentSaveController");
const getAppointmentController = require("./controller/getAppointmentController");
const examinerAppointment = require("./controller/examinerAppointment");
const updateGrand = require("./controller/updateGrad");
const filterAppointmentData = require("./controller/filterAppointmentData");
const displayResult = require("./controller/displayResult");

const expressSession = require("express-session");
const driverAuthMiddleware = require("./middleware/driverAuthMiddleware");
const redirectIfAuthenticatedMiddleware = require("./middleware/redirectIfAuthenticatedMiddleware");
const adminAuthMiddleware = require("./middleware/adminAuthMiddleware");
const examinerAuthMiddleware = require("./middleware/examinerAuthMiddleware");

global.loggedIn = null;
global.loggedInType = null;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use("*", (req, res, next) => {
  if (req.session) {
    loggedIn = req.session.userId;
    loggedInType = req.session.userType;
  } else {
    loggedIn = req.session?.userId;
    loggedInType = req.session?.userType;
  }
  next();
});
app.use(
  expressSession({
    secret: "Korat985Maniya550",
  })
);
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const port = 4001;

app.get("/", indexController);

app.get("/g", driverAuthMiddleware, gController);

app.get("/g2", driverAuthMiddleware, g2Controller);

app.post("/save-driverdata", driverAuthMiddleware, saveUserController);

app.post("/update", driverAuthMiddleware, updateController);

app.get("/login", loginController);

app.post("/signUp", redirectIfAuthenticatedMiddleware, signUpController);

app.post("/signIn", redirectIfAuthenticatedMiddleware, signInController);

app.get("/logout", logoutController);

app.get("/appointment", adminAuthMiddleware, appointmentController);

app.post("/appointment-add", adminAuthMiddleware, appointmentSaveController);

app.get("/get-appointment/:date", getAppointmentController);

app.get("/display-result",adminAuthMiddleware, displayResult);

app.get("/examiner-appointment",examinerAuthMiddleware,  examinerAppointment);

app.post("/update-grad",examinerAuthMiddleware, updateGrand);

app.get("/examiner-appointment/:type",examinerAuthMiddleware, filterAppointmentData);

app.listen(port, () => {});
