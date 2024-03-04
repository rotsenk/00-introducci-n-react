## Usos de la desestructuración
```javascript

//Destructuración de objetos
//Asignación desestructurante
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Emilia',
    edad: 37,
    clave: 'Daenerys'
};

//necesito trabajar con estas propiedades
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/

//Este proceso sería tedioso al tener muchos datos
//Sería interesante simplemente extraer de este objeto
//lo que yo necesito utilizar
//Utilizaremos destructuring

//const { } = persona; //extrae lo que pongo en las llaves de el objeto persona
const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);
```
## Otros usos de la desestructuración
```javascript

const persona = {
    nombre: 'Emilia',
    edad: 37,
    clave: 'Daenerys'
};

//const { edad, clave, nombre } = persona;
//si yo quisiera hacer esto mismo
//podemos desestructurar en el argumento
//podemos asignar el valor a una propiedad
const retornaPersona = ({nombre, edad, rango = 'Reina 7 reinos'}) => {

    console.log(edad, nombre, rango);
}

retornaPersona(persona);

```

## Otra forma de hacer destructuring y adicionar propiedades
```javascript

const persona = {
    nombre: 'Emilia',
    edad: 37,
    clave: 'Daenerys'
};

const retornaPersona = ({clave, nombre, edad, rango = 'Reina 7 reinos'}) => {
  return {
    nombreClave: clave,
    anios: edad,
  }
}

const GOT = retornaPersona(persona);
console.log(GOT);
```

## Llamando objetos dentro de objetos
```js

const persona = {
    nombre: 'Emilia',
    edad: 37,
    clave: 'Daenerys'
};

const retornaPersona = ({clave, nombre, edad, rango = 'Reina 7 reinos'}) => {
//a veces tendremos que retornar objetos que tengan objetos dentro  
    return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.2345,
        lng: -12.3440
    }
  }
}

const {nombreClave, anios, latlng:{lat, lng} } = retornaPersona(persona);
console.log(nombreClave, anios);
//podemos retornar el objeto latlng
/*console.log(latlng);*/
//pero si necesito las constantes específicas
//colocamos dos puntos luego {}
console.log(lat, lng);
```