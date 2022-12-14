const mongoose = require("mongoose");
const DriveTest = require("./models/DriveTest");

mongoose.connect(
  "mongodb+srv://db_mohit:Mohit%40123@atlascluster.zowjshq.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

DriveTest.create(
  {
    fname: "Tfyfest",
    lname: "Test2",
    age: "25",
  },
  (error, drivetest) => {
    console.log(error, drivetest);
  }
);
