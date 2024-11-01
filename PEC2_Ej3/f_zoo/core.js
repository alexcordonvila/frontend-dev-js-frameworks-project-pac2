const data = require('./data');

function entryCalculator(entrants) {
  if(!entrants || Object.keys(entrants).length === 0){
    return 0;
  }else{
    return Object.keys(entrants).reduce(function(acc, key) {
      if (key === "Adult") {
          return acc + entrants[key] * data.prices.Adult;
      }
      if (key === "Senior") {
          return acc + entrants[key] * data.prices.Senior;
      }
      if (key === "Child") {
          return acc + entrants[key] * data.prices.Child;
      }
      return (acc); 
    }, 0); 
  }
}

function schedule(dayName) {
  // your code here
}

function animalCount(species) {
    // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
