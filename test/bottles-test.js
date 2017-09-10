var assert = require("chai").assert;
var check = require("../index.js");

describe("Total Bottles", function() {
  it("Calculates how many bottles you can get with your investment", function() {
    var dollars = 10;
    assert.strictEqual(check(dollars), 15);
  })
  it("Calculates how many bottles you can get with your investment", function() {
    var dollars = 20;
    assert.strictEqual(check(dollars), 35);
  })
  it("Calculates how many bottles you can get with your investment", function() {
    var dollars = 30;
    assert.strictEqual(check(dollars), 55);
  })
  it("Calculates how many bottles you can get with your investment", function() {
    var dollars = 40;
    assert.strictEqual(check(dollars), 75);
  })
});