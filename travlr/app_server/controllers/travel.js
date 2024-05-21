var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./public/data/trips.json", "utf8"));

/* GET travel view */
const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways", trips });
};

module.exports = {
  travel,
};
