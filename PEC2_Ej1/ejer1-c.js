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
      }, 2000);
    });
};
//funció adicional asincrona que gestiona la crida a findOne i el seu resultat 
async function asyncCall(list, { key, value }) {
  //Usem try catch per gestionar els diferents estats de la promise
  try {
    //crida a la funció findOne fent us del await per gestionar l'asincronía tot rebent la promise
    const element = await findOne(list, { key, value });
    // Mostrem per consola el nom de l'usuari que s'ha trobat
    console.log(`user: ${element.name}`);
  } catch (err) {
    // Mostrem per consola el missatge d'error si no s'ha trobat l'usuari
    console.log(err.msg);
  }
}

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
//consum de la funció asíncrona usant async fent que es resolgui favorablement.
asyncCall(users, { key: 'name', value: 'Carlos' });
//Print per consola de manera síncrona
console.log("findOne error");
//consum de la funció asíncrona usant async fent que es resolgui desfavorablement.
asyncCall(users, { key: 'name', value: 'Fermin' });

/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
