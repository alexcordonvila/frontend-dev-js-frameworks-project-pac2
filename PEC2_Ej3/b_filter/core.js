function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(element=> !element.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter(element=> element.every(num => num > 0));
}

function allSameVowels(array) {
  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
