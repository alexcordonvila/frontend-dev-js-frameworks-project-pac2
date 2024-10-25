const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const element = list.find((element) => element[key] === value);
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
      }, 2000);
    });
};

const users = [
  {
    name: "Carlos",
    rol: "Teacher",
  },
  {
    name: "Ana",
    rol: "Boss",
  },
];
console.log("findOne success");
findOne(users, { key: 'name', value: 'Carlos' })
  .then((element) => console.log(`user: ${element.name}`)) 
  .catch((error) => console.log(error.msg));

console.log("findOne error");
findOne(users, { key: 'name', value: 'Fermin' })
  .then((element) => console.log(`user: ${element.name}`)) 
  .catch((error) => console.log(error.msg));

/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
