//Math Object extensions

randomDec = function (low, high) {
  //return a random decimal between low(inclusive) and high(exclusive)
  return Math.random() * (high - low) + low;
};

randomInt = function (low, high) {
  //return a random integer between low (inclusive) and high (exclusive)
  return Math.floor(randomDec(low, high));
};

roundTo = function (num, numPlaces) {
  //round num off to the nearest numPlaces
  num = num * 10 ** numPlaces;
  num = Math.round(num);
  return num / 10 ** numPlaces;
};
