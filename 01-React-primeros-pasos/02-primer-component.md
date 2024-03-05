## Nuestro primer componente en React
En esta ocasión, realizaremos nuestro primer componente en un archivo independiente, porque así funciona react
- Crear nuestro punto de entrada de la app, se llamará "FirstApp.jsx", depende de lo que estemos manejando, algo que tenga sentido

Facilmente podríamos cortar el código, guardar cambios y pegarlo dentro de FirstApp
```js
function App() {
    //esto es algo como document.createElement...
    return (<h1>Hola Mundo!!!</h1>);
}
```
> pero debemos tener la palabra explícita EXPORT, para poderlo importar 
```js
//lo tenemos exportado de manera granulada
export function App() {
    //esto es algo como document.createElement...
    return (<h1>Hola Mundo. Desde FirstApp!</h1>);
}

//export const hola = '123';
/**Es recomendable que las exportaciones se den así, porque son independientes
 * Sirve para tomar cualquier archivo que necesito
 */
```
-Preferiblemente exportar independiente, pero depende de cada quién

> El archivo `main.jsx` nos quedaría así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
//importación del componente de FirsApp
import { App, hola } from './FirstApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
```
# Snippet con rafc
Podemos crear por medio de un comando rafc, es un snippet, y nos creará el componente de manera inmediata
```js
//este usa pascal case

export const FirstApp = () => {
  return (
    <div>
      Hello World App!!!!!!
    </div>
  );
}
```
- El main.jsx quedaría así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);
```
> Tarea, crear un componente personalizado que muestre nuestro nombre