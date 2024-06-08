// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from the json file
let fs = require('fs');
let path = require('path');
let tripsPath = path.join(__dirname, '..', '..', 'public', 'data', 'trips.json');
let trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Call the seedDB function and handle the Promise
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
}).catch(err => {
    console.error('Error seeding the database:', err);
    process.exit(1);
});
