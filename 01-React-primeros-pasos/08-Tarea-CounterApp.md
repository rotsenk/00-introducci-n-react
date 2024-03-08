## Se dejó una tarea
- Tarea: https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757

```js
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h3>{value}</h3>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
```

se verá así el `main.jsx`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 1011 } />
    </React.StrictMode>
);
```
## Necesitamos colocar un botón para que surja algo en nuestra app
vamos al `CounterApp.jsx` y nuestra función `CounterApp` se vería así:
```js
export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h3> { value } </h3>
      <button onClick={function ( event ) { console.log(event) }}>
        +1
      </button>
    </>
  );
};
```
pero nosotros no queremos que la función esté adentro de nuesto html, sino que afuera, por decirlo así, entonces modificamos...
```js
import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  function handleAdd(event, newValue){
    console.log(newValue)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h3> { value } </h3>
      <button onClick={ ( event ) => handleAdd(event, 'hola') }>
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

```

pero usualmente no hacemos eso así, sino que simplemente mandamos la función que recibe un evento y ese evento se pasa a otra función, podemos obviar mandar la referencia con todo y argumentos, y sólo mandamos la referencia para que los argumentos definidos pasen de la misma manera que en la función
```js
import React from "react";
import PropTypes from "prop-types";

//es preferíble usar una función de flecha
//si esta fucnión no tiene ninguna interacción con el functional component
//se recomienda dejarla fuera
const handleAdd = (event) => {
  console.log(event);
};

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h3> {value} </h3>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

```