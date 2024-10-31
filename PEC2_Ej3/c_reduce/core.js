function sum(array) {
  return array.reduce((accum, currentValue) => accum + currentValue,0);
}

function productAll(array) {
  return array.flat().reduce((accum, currentValue) => accum * currentValue, 1);
}

function objectify(array) {
  const result= array.reduce((accum, [clave, valor]) => {
    accum[clave] = valor; 
    return accum;
}, {});
  return result;
}

function luckyNumbers(array) {
  var message="Your lucky numbers are: ";
const resultado = message.concat(array.reduce((acc, num, indx) => {
        if (indx === array.length - 1) {
            return `${acc}, and ${num}`;
        }
        return `${acc}, ${num}`;
    },));
    return resultado;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
