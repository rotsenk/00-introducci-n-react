## Hablaremos de los tipos de propiedades
Supongamos que queremos que el título de FirstApp sea obligatorio
Podríamos sacar esas props del `main.jsx` en nuestro componente
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);
```

teniendo `el FirstApp` de la siguiente manera:
```js

const getResult = () => {
  return "Nestor Rivas";
} 

export const FirstApp = ({ title, subTitle }) => {

  //creamos un if para verificar si lo están mandando el titulo
  if (!title) {
    throw new Error('El título no existe.');
  }

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}
```
Esto realmente no es funcional. y debemos tener un warning que solicite que enviemos ese dato a nuestro componente, ahí es donde entran las proptypes.

Debemos hacer la instalación, aunque se pregunte ¿por qué no vienen incluidas? porque estamoms trabajando con VITE, y este lo que hace es optimizar tantas dependencias para que nosotros las podamos controlar y que utilicemos sólo las necesarias

Procederemos a instalarlas: `npm install prop-types`

Una vez instalado, lo vamos a importar en nuestro *functional component* `FirstApp.jsx`
```js
import PropTypes from 'prop-types';//define el tipo a las properties

const getResult = () => {
  return "Nestor Rivas";
} 

export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}
//¿cómo definimos las proptypes?
//venimos acá abajo y escribimos lo siguiente:
FirstApp.propTypes = {
  title: PropTypes.string
}
```
luego le pasamos un número en title en el `main.jsx` así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title={123}/>
    </React.StrictMode>
);
```
Esto pueda que la aplicación corra, pero los errores internos nos dicen que se esperaba un string. Entonces debemos mandar un string, así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy el títle"/>
    </React.StrictMode>
);
```

ahora nuestra aplicación no dará errores

> Qué tal si necesitamos que ese sea obligatorio? 
Tendríamos que agregar isRequired, así: `title: PropTypes.string.isRequired`

luego, podemos pedirle que subTitle sea requerido pero que sea de tipo numérico
```js
import PropTypes from 'prop-types';//define el tipo a las properties

const getResult = () => {
  return "Nestor Rivas";
} 

export const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}
```

Así que, deberíamos pasarlo en el `main.jsx`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy el títle" subTitle={12345}/>
    </React.StrictMode>
);
```