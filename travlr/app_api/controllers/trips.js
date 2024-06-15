// app_api/controllers/trips.js

const fs = require("fs");
const path = require("path");
const Trip = require("../models/travlr");

const tripsFilePath = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "data",
  "trips.json"
);

const tripsList = (req, res) => {
  fs.readFile(tripsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Could not read file" });
    } else {
      const trips = JSON.parse(data);
      res.status(200).json(trips);
    }
  });
};

const tripsFindByCode = (req, res) => {
  const tripCode = req.params.tripCode;
  fs.readFile(tripsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Could not read file" });
    } else {
      const trips = JSON.parse(data);
      const trip = trips.find((t) => t.code === tripCode);
      if (trip) {
        res.status(200).json(trip);
      } else {
        res.status(404).json({ message: "Trip not found" });
      }
    }
  });
};

// POST: /trips - adds a new trip
//regardless of outcome, response must include HTML status code and JSON message to requesting client
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description,
  });

  const q = await newTrip.save();

  if (!q) {
    //Database returned no data
    return res.status(400).json(err);
  } else {
    // return new trip
    return res.status(201).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
};
