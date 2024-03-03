## Desestructuración de Arreglos
Supongamos que tenemos un arreglo almacenado en una constante llamada "Dragones" y tenemos que mostrar cada uno de los datos de este arreglo
```js

const dragones = ['Drogon', 'Viserion', 'Rhaegal'];
console.log(dragones[0]);
console.log(dragones[1]);
console.log(dragones[2]);
//pero no podemos hacer esto cuando tenemos cientos de datos 
//no es optimo llamar uno a uno con sus indices
```

## Desestructuración de arreglo
```js

const dragones = ['Drogon', 'Viserion', 'Rhaegal'];

//los arreglos vienen con indices, en orden
//y quisieramos tomar el dato de Rhaegal
//sólo le decimos al arreglo que ignore las otras dos posiciones
const [, , d3] = dragones;

console.log(d3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

/*const arr = retornaArreglo();
console.log(arr);*/

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea
/**Crear una función useState que retorne un arreglo
 * va a recibir un argumento valor
 * regresar el arreglo, la primer posición el valor
 * y la segunda posición la función
 */
const useeState = (valor) => {
    return [ valor, () => { console.log('hola mundo') }];
}

const [ nombre, setNombre ] = useeState('Rhaegal');
console.log(nombre);
setNombre();
```