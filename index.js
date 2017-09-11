
var dollarAmount = Number(process.argv[2]);
var resultBottles = null;
var bottles = null;
var currentBottleCaps = [];
var bottlesEarned = null;
var bottleCapsEarned = null;
var remainingCaps = [];
var remainingBottles = [];

var bottlesForDollars = function(dollars) {
  var newBottles = Math.floor(dollars / 2);
  return newBottles;
}

var emptyToFull = function(bottles) {
  if (bottles > 1) {
    var newBottles = Math.floor(bottles / 2);
    bottlesEarned += newBottles;
    var leftoverBottles = bottles % 2;
    currentBottleCaps.push(newBottles);
    resultBottles += newBottles;
    newBottles += leftoverBottles;
    return newBottles;
  }
  return;
}

var bottleCapsToFull = function(bottleCaps) {
  if (bottleCaps > 1) {
    var newBottles = Math.floor(bottleCaps / 4);
    bottleCapsEarned += newBottles;
    var leftoverBottleCaps = bottleCaps % 4;
    currentBottleCaps.push(leftoverBottleCaps + newBottles);
    resultBottles += newBottles;
    return newBottles;
  }
  return;
}


var totalBottles = function(dollars) {
  resultBottles = bottlesForDollars(dollars);
  bottles = resultBottles;
  var bottleCaps = bottles;
  while (bottles > 0 || bottleCaps > 0) {
    bottles = emptyToFull(bottles);
    bottles += bottleCapsToFull(bottleCaps);
    remainingBottles.push(bottles);
    bottleCaps = currentBottleCaps.pop(0) + currentBottleCaps.pop(1);
    remainingCaps.push(bottleCaps);
  }
  remainingCaps.pop();
  remainingBottles.pop();
  console.log("TOTAL BOTTLES: " + resultBottles);
  console.log("REMAINING BOTTLES: " + remainingBottles.pop());
  console.log("REMAINING CAPS: " + remainingCaps.pop())
  console.log("TOTAL EARNED: ");
  console.log("   BOTTLES: " + bottlesEarned);
  console.log("   CAPS: " + bottleCapsEarned);
  return resultBottles;
}

totalBottles(dollarAmount);

module.exports = totalBottles;