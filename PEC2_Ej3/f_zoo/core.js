const data = require("./data");

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  } else {
    return Object.keys(entrants).reduce(function (acc, key) {
      if (key === "Adult") {
        return acc + entrants[key] * data.prices.Adult;
      }
      if (key === "Senior") {
        return acc + entrants[key] * data.prices.Senior;
      }
      if (key === "Child") {
        return acc + entrants[key] * data.prices.Child;
      }
      return acc;
    }, 0);
  }
}
function formatTime(hour) {
  return new Date(0, 0, 0, hour)
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    })
    .toLowerCase()
    .replace(" ", "");
}
function schedule(dayName) {
  var result = Object.entries(data.hours).reduce((acc, [day, hours]) => {
    if (hours.open > 0 && hours.close > 0) {
      acc[day] = `Open from ${formatTime(hours.open)} until ${formatTime(
        hours.close
      )}`;
    } else {
      acc[day] = "CLOSED";
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
function getNamesBySpecie(specie, sex) {
  const animal = data.animals.find((animal) => animal.name === specie);
  const filteredResidents = sex
    ? animal.residents.filter((resident) => resident.sex === sex)
    : animal.residents;

  const names = filteredResidents.map((resident) => resident.name);
  return { [specie]: names };
}
function animalMap(options) {
  const uniqueLocations = [
    ...new Set(data.animals.map((animal) => animal.location)),
  ];

  const result = uniqueLocations.reduce((acc, location) => {
    acc[location] = data.animals
      .filter((animal) => animal.location === location)
      .map((animal) =>
        options && options.includeNames
          ? getNamesBySpecie(animal.name, options.sex)
          : animal.name
      );

    return acc;
  }, {});

  return result;
}

function animalPopularity(rating) {
  const uniquePopularity = [
    ...new Set(data.animals.map((animal) => animal.popularity)),
  ];

  var result = uniquePopularity.reduce((acc, popularity) => {
    acc[popularity] = data.animals
      .filter((animal) => animal.popularity === popularity)
      .map((animal) => animal.name);
    return acc;
  }, {});

  return rating ? result[rating] : result;
}

function animalsByIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map((currentId) =>
      data.animals.find((animal) => animal.id === currentId)
    );
  }
  return ids ? data.animals.filter((animal) => animal.id === ids) : [];
}

function animalByName(animalName) {
  var result = data.animals
    .map((animal) =>
      animal.residents
        .filter((resident) => resident.name === animalName)
        .map((resident) => ({
          ...resident,
          species: animal.name,
        }))
    )
    .flat();

  return animalName ? result[0] : {};
}

function employeesByIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map((currentId) =>
      data.employees.find((employee) => employee.id === currentId)
    );
  }
  return ids ? data.employees.filter((employee) => employee.id === ids) : [];
}

function employeeByName(employeeName) {
  var result = data.employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );

  return employeeName ? result : {};
}
function isId(idOrName) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    idOrName
  );
}
function managersForEmployee(idOrName) {
  var employeeData = isId(idOrName)
    ? employeesByIds(idOrName)[0]
    : employeeByName(idOrName);
  var employeeManagerId = employeeData.managers;
  var employeeManagerData = employeesByIds(employeeManagerId);
  var managerNames = employeeManagerData.map(
    (managerData) => `${managerData.firstName} ${managerData.lastName}`
  );

  return (result = {
    ...employeeData,
    managers: managerNames,
  });
}

function employeeCoverage(idOrName) {
  var employeeExists = data.employees.some(
    (employee) =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName
  );
  // with no parameters, returns a list of employees and the animals they're responsible for
  var employeeData = employeeExists
    ? data.employees.filter(
        (employee) =>
          employee.id === idOrName ||
          employee.firstName === idOrName ||
          employee.lastName === idOrName
      )
    : data.employees;

  var result = employeeData.reduce((acc, employee) => {
    acc[`${employee.firstName} ${employee.lastName}`] = animalsByIds(
      employee.responsibleFor
    ).map((animal) => animal.name);
    return acc;
  }, {});

  return result;
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
  employeeCoverage,
};
