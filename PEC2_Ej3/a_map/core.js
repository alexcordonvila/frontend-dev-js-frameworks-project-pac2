function multiplyBy10(array) {
  return array.map((x) => x * 10);
}

function shiftRight(array) {
  const longitud = array.length;
  const result = array.map((element, index_actual, array_original) => {
    return array_original[(index_actual - 1 + longitud) % longitud]
  });
  return result;
}

function onlyVowels(array) {
  const result = array.map(element => {
    return element.replace(/[^aeiouAEIOU]/g, ''); 
  });
  return result;
}

function doubleMatrix(array) {
  const result = array.map(element => {
    return element.map(numero => numero * 2);
  });
  return result;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
