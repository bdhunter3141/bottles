
var dollarAmount = Number(process.argv[2]);
var resultBottles = null;
var bottles = null;
var currentBottleCaps = [];

var bottlesForDollars = function(dollars) {
  bottles = dollars / 2;
  return bottles;
}

var emptyToFull = function(bottles) {
  if (bottles > 1) {
    var newBottles = Math.floor(bottles / 2);
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
    bottleCaps = currentBottleCaps.pop(0) + currentBottleCaps.pop(1);
  }
  console.log(resultBottles);
}

totalBottles(dollarAmount);

module.exports = totalBottles;