//Implementació del mètode findOne que rep l'array on buscar, l'objecte a buscar per clau-valor
//i en el tercer camp els dos callbacks
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    //emula un comportament asíncron amb un delay de 2000ms (2segons)
    setTimeout(() => { 
      //cerca de coincidència, usant la funció find, entre "valor" i el contingut de l'array
        const element = list.find((element) => element[key] === value); 
        //si l'element es troba dins l'array s'exercuta el callback onSuccess sino s'executa el onError
        element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" }); 
        //delay del setTimeout en ms
    }, 2000);
};
//Declaració del callback onSuccess que rep un string (name) i el mostra per consola
const onSuccess = ({ name }) => console.log(`user: ${name}`);
//Declaració del callback onError que rep un string (msg) i el mostra per consola
const onError = ({ msg }) => console.log(msg);

//array d'usuaris amb dos camps definits amb nom i rol a cadascun
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
//Cas d'ús positiu on es troba l'usuari
console.log("findOne success");
findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError });

//Cas d'ús negatiu on no es troba l'usuari
console.log("findOne error");
findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError });

/*
Aquest és el resultat que veurem per consola a l'executar el codi.
Podem observar que primer es mostra el codi síncron, el console.log del findOne success i el console.log
de findOne error, malgrat es trobin en linies intercalades amb altres mètodes. Llavors, al cap de 2 segons 
s'executa i es mostra el resultat del codi asíncron on veiem que l'usuari Carlos s'ha trobat i l'usuari Fermin 
no s'ha trobat
*/
/*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
