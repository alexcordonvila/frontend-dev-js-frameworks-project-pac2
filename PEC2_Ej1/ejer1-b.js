//Implementació del mètode findOne que rep l'array on buscar i l'objecte a buscar per clau-valor
const findOne = (list, { key, value }) => {
  //retornem una Promise un cop es resol l'execució del timeout
  return new Promise((resolve, reject) => {
    //emula un comportament asíncron amb un delay de 2000ms (2segons)
    setTimeout(() => {
        //cerca de coincidència, usant la funció find, entre "valor" i el contingut de l'array
        const element = list.find((element) => element[key] === value);
        //si l'element a cercar existeix dins la llista retornem resolve sino el reject amb un msg d'error
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
        //delay del setTimeout en ms
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
//Print per consola de manera síncrona
console.log("findOne success");
//consum de la funció findOne usant la promise fent una cerca que es resol favorablement.
findOne(users, { key: 'name', value: 'Carlos' })
  .then((element) => console.log(`user: ${element.name}`)) 
  .catch((error) => console.log(error.msg));
//Print per consola de manera síncrona
console.log("findOne error");
//consum de la funció findOne usant la promise fent una cerca que es resol desfavorablement.
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
