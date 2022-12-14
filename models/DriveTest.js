const mongooes = require("mongoose");
const Schema = mongooes.Schema;
const bcrypt = require("bcrypt");
const DriveTestschema = new Schema({
  firstname: String,
  lastname: String,
  age:Number,
  licenceno: String,
  sin: String,
  username: String,
  userType: String,
  password: String,
  appointmentType: String,
  comment: String,
  testResult: String,
  appointmentID: {
    type: mongooes.Schema.Types.ObjectId,
    ref: "Appointment"
  },
  car_details: {
    make: String,
    model: String,
    year:Number,
    platno: String,
  },
});

DriveTestschema.pre("save", function (next) {
  const drive = this;
  bcrypt.hash(drive.password, 10, (error, hash) => {
    drive.password = hash;
    next();
  });
});

const DriveTest = mongooes.model("DriveTest", DriveTestschema);

module.exports = DriveTest;
