// app_server/controllers/travel.js

const fs = require('fs');
const path = require('path');

const tripsFilePath = path.join(__dirname, '..', '..', 'public', 'data', 'trips.json');

const tripDetails = (req, res) => {
  const tripCode = req.params.tripCode;
  fs.readFile(tripsFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).render('error', { message: 'Could not read file' });
    } else {
      const trips = JSON.parse(data);
      const trip = trips.find(t => t.code === tripCode);
      if (trip) {
        res.render('trip-detail', { trip });
      } else {
        res.status(404).render('error', { message: 'Trip not found' });
      }
    }
  });
};

module.exports = {
  tripDetails
};
