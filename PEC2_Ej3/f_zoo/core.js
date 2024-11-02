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

    return dayName ? { [dayName]: result[dayName] } : result;

}

function animalCount(species) {

  var result = data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc; 
  }, {});

  return species ? result[species] : result;

}
function getNamesBySpecie(specie, sex){
  const animal = data.animals.find(animal => animal.name === specie);
  const filteredResidents = sex 
    ? animal.residents.filter(resident => resident.sex === sex) 
    : animal.residents;
    
  const names = filteredResidents.map(resident => resident.name);
  return {[specie]: names};
}
function animalMap(options) {
  const uniqueLocations = [...new Set(data.animals.map(animal => animal.location))];

  const result = uniqueLocations.reduce((acc, location) => {
    acc[location] = data.animals
      .filter(animal => animal.location === location)
      .map(animal => 
        (options && options.includeNames)
          ? getNamesBySpecie(animal.name, options.sex) 
          : animal.name
      );    
      
      return acc;
  }, {});

  return result;
}

function animalPopularity(rating) {
  const uniquePopularity = [...new Set(data.animals.map(animal => animal.popularity))];

  var result = uniquePopularity.reduce((acc, popularity) => {
    acc[popularity] = data.animals
    .filter(animal => animal.popularity === popularity)
    .map(animal => animal.name);    
    return acc;
  }, {});

  return rating ? result[rating] : result;
}

function animalsByIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map(currentId => data.animals.find(animal => animal.id === currentId));
  }
  return ids ? data.animals.filter(animal=>animal.id===ids) : [];
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
