## Hola Mundo en react
- Primeramente, debemos eliminar todo lo que se encuentra en la carpeta `src`
- Crear un archivo `main.jsx` dentro de la carpeta `src`
- Quedando nuestro código en el el archivo, así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client'; //estos elementos necesito p/renderizar mi app

//qué vamos a renderizar?
//estos componentes no son más que funciones
function App() {
    //esto es algo como document.createElement...
    return (<h1>Hola Mundo!!!</h1>);
}

//rendericemos
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
```
> Es probable que esto, nos den advertencias en el navegador, por el hecho de usar ReactDOMClient, pero que esto sólo se recarga. aunque esto no lo tenemos que hacer, solamente era a base de una práctica sencilla para que se entienda cómo funcione.

Felicidades, es nuestra primera app de React!!!
Esta siempre va a contener:
- Importación de react, algún tipo de herramienta para renderizar
- Nuestro componente, que usualmente no está en el archivo main
- Una forma de renderizar el componente en el DOM