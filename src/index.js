var starwars_names = require("./starwars-names.json");
var unique = require("unique-random-array");
module.exports = {
  all: starwars_names,
  random: unique(starwars_names)
};
