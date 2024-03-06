# Properties (props)
## Hablaremos de las properties que los functionals components reciben
las properties, es info que fluye desde el componente padre hasta el componente hijo
el archivo `FirstApp.jsx`, puede verse así:
```js

const getResult = () => {
  return "Nestor Rivas";
} 

//concepto fundamental props, que le estamos mandando a esta función
//aunque es raro que miremos esa palabra props dentro
//normalmente se desestructura
//las props es un objeto que puede contener mucha info dependiendo del contexto
export const FirstApp = (props) => {
  //si imprimimos las props, veremos que tenemos un obj
  console.log(props);
  return (
    <>
      <h1>{ props.title }</h1>
      <p>Soy un Ingeniero en Sistemas Informáticos</p>
    </>
  );
}
```
- vayamos al navegador y busquemos la parte que dice componentes, ahí veremos todo el arbol de componentes (contexto en el que corre la app)

Destructurando...
```js

const getResult = () => {
  return "Nestor Rivas";
} 

//podemos destructurar las props y colocar lo que nos interesa
export const FirstApp = ({ title }) => {
  //console.log(props);
  return (
    <>
      <h1>{ title }</h1>
      <p>Soy un Ingeniero en Sistemas Informáticos</p>
    </>
  );
}
```

los cambios en el `main.jsx` se verían reflejados así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* En el momento que estoy llamando el componente,
         * puedo ponerle el titulo
         * esas con las properties
          */}
        <FirstApp title="Hola soy el Titulo" subTitle="123"/>
    </React.StrictMode>
);
```

y los cambios en `FirstApp` se verían reflejados así:
```js

const getResult = () => {
  return "Nestor Rivas";
} 

//qué pasa si queremos enviarle info del componente padre
export const FirstApp = ({ title, subTitle }) => {
  //console.log(props);
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}
```
y así es como le podemos enviar info del componente padre al hijo, por medio de props