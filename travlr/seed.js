const mongoose = require("mongoose");
const Trip = require("./app_api/models/travlr"); // Path to the Trip model

const fs = require("fs");
const path = require("path");
const tripsFilePath = path.join(__dirname, "public", "data", "trips.json"); // Path to the trips.json file
const trips = JSON.parse(fs.readFileSync(tripsFilePath, "utf8"));

const dbUrl = "mongodb://localhost:27017/travlr";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

seedDB()
  .then(async () => {
    await mongoose.connection.close();
    console.log("Database seeded!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
