// app_api/controllers/trips.js

const fs = require('fs');
const path = require('path');

const tripsFilePath = path.join(__dirname, '..', '..', 'public', 'data', 'trips.json');

const tripsList = (req, res) => {
  fs.readFile(tripsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ "error": "Could not read file" });
    } else {
      const trips = JSON.parse(data);
      res.status(200).json(trips);
    }
  });
};

const tripsFindByCode = (req, res) => {
  const tripCode = req.params.tripCode;
  fs.readFile(tripsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ "error": "Could not read file" });
    } else {
      const trips = JSON.parse(data);
      const trip = trips.find(t => t.code === tripCode);
      if (trip) {
        res.status(200).json(trip);
      } else {
        res.status(404).json({ "message": "Trip not found" });
      }
    }
  });
};

module.exports = {
  tripsList,
  tripsFindByCode
};
