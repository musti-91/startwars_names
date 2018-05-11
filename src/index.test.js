var starwars = require("./index");
var expect = require("chai").expect;

describe("starwars-names", function() {
  describe("all", function() {
    it("should be return all elements in array", function() {
      expect(starwars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(arra) {
        return arra.every(function(item) {
          return typeof item === "string";
        });
      }
    });
    it("should conatin `Luke SkyWalker`", function() {
      expect(starwars.all).to.include("Luke SkyWalker");
    });
  });
  describe("random", function() {
    it("should return a random item from the starwars.all", function() {
      let randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });
  });
});
