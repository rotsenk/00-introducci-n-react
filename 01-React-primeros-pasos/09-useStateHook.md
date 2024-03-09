## En esta ocasión haremos uso de useState

De las mejores cosas que React ha introducido en su librería desde hace muchos años en su versión 16.8, los hooks

_Hooks_ son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

> podemos ver la web: https://es.legacy.reactjs.org/docs/hooks-intro.html

Los hooks no son más que funciones.

- Comenzaremos a trabajar con nuestro primer **Hook**
- Usualmente, se importa primero la parte de los Hooks

`const [] = useState();` cuando lo hacemos de esta manera, se requiere mandar un valor inicial

supongamos que tenemos esto:

```js
export const CounterApp = ({ value }) => {
 //creamos una constante y destructuramos
 //destructuración del retorno de esta función
 const [ counter ] = useState( 0 );
 //valor inicial cero, el valor del estado, o el número que le coloquemos


 const handleAdd = (event) => {
   //console.log(event);
   counter++;//es probable que pensemos que podemos cambiar su valor de esta forma
   //pero una constante no tiene forma de settear un valor
 };
 .
 .
 .
}
```

> ¿Cómo hacemos para cambiar el valor del useState? ese valor lo podemos cambiar con el segundo argumento que usualmente lleva el nombre de "set" seguido de algo descriptivo, por ejemplo:

`const [ counter, setCounter ] = useState( 0 );`

podríamos tener esto dentro de mi functional component:

```js
export const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState( 0 );

  const handleAdd = (event) => {
    //console.log(event);
    //mando a llamar la función
    setCounter( counter + 1 );
    //no podemos hacer counter++ porque nos daría un error al querer acumular
  };
  .
  .
  .
}
```
Cuando mandamos a llamar setCounter, le dice a react que el estado cambió, y vuelve a ejecutar el componente, sólo el pequeño bloque está cambiando, eso es eficiente y óptimo.

El código completo quedaría así:
```js
import { useState } from 'react';//use significa que es un Hook, es una regla
import React from "react";
import PropTypes from "prop-types";



export const CounterApp = ({ value }) => {
 
  const [ counter, setCounter ] = useState( 0 );

  const handleAdd = (event) => {
    //console.log(event);
    //mando a llamar la función
    setCounter( counter + 1 );
    //no podemos hacer counter++ porque nos daría un error al querer acumular
  };


  return (
    <>
      <h1>CounterApp</h1>
      <h3> { counter } </h3>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

```

Podríamos incluso, usar el valor que el componente Padre obtiene por defecto en el `main.jsx`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
    </React.StrictMode>
);
```
quedando el nuevo código de `CouterApp.jsx` así:
```js
import { useState } from 'react';//use significa que es un Hook, es una regla
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
 
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (event) => {
    //console.log(event);
    setCounter( counter + 1 );
  };


  return (
    <>
      <h1>CounterApp</h1>
      <h3> { counter } </h3>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
```
y así no se puede modificar desde el navegador usando la extensión para React components, porque mantiene el estado