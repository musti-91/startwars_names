var starwars_names = require("starwars-names");
var unique = require("unique-random-array");
module.exports = {
  all,
  random: unique(starwars_names)
};
