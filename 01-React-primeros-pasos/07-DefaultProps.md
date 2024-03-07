## Si queremos pasarle properties por default
Ventaja de los propTypes, es que nos indican cuando estamos pasando un valor diferente del que se solicita

podríamos hacer esto:
```js
import PropTypes from 'prop-types';

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
//por acá podemos definir los default properties
//nuestras defaultProps entran antes que nuestras propTypes
//No siempre se va a trabajar con las props que estamos destructurando
FirstApp.defaultProps = {
  title: 'No hay título.',//esto para cuando no se envíe título, muestra la resp por default
  subTitle: 'No hay subtitle',
  name: 'Nestor Rivas'
}
```

en el `main.jsx`:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy el títle" />
    </React.StrictMode>
);
```
