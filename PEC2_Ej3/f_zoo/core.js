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
function formatTime(hour) {
  return new Date(0, 0, 0, hour).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true
  }).toLowerCase().replace(' ', ''); 
}
function schedule(dayName) {
  var result = Object.entries(data.hours).reduce((acc, [day, hours]) => {
    if (hours.open > 0 && hours.close > 0) {
      acc[day] = `Open from ${formatTime(hours.open)} until ${formatTime(hours.close)}`;
    }else{
      acc[day] = 'CLOSED';
    }
      return acc;
    }, {});
    if(!dayName){ 
      return result;  //with no parameters, returns a more human readable schedule
    }else{ 
      return {[dayName]: result[dayName] }; //with a single day entered, returns only that day in a more human readable format
    }
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
