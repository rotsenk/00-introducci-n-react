# React Hooks Formularios
- guía de bluuweb: https://bluuweb.dev/05-react/02-form.html
- documentación: https://es.react.dev/reference/react-dom/components#form-components; https://es.react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components 

> En la práctica, componentes «controlado» y «no controlado» no son términos técnicos estrictos: cada componente suele tener una mezcla de estado local y por props. Sin embargo, es una forma útil de describir cómo se diseñan los componentes y qué capacidades ofrecen. 
Cuando escribas un componente, plantéate qué información debe ser controlada (mediante props), y qué información debe ser no controlada (mediante estado). Pero siempre puedes cambiar de opinión y refactorizar más tarde.

# Formularios no controlados
Es una alternativa para que los datos del form sean manejados por el propio DOM, pero para ello, necesitaremos una referencia y así `React` podrá hacer la comunicación.

## Creación del componente
- Creamos una carpeta dentro de `src` que se llame `components`
- Dentro de esa carpeta creamos un nuevo componente, con el nombre de `NoControlado.jsx`
```js
const NoControlado = () => {
    return "No Controlado";
}

export default NoControlado;
```
- Creamos un archivo `App.jsx` para que sea renderiazado por el `main.jsx` pero que caiga en `App.jsx` los procesos 
- Luego lo importamos en nuestro `App.jsx`
```js
import NoControlado from './components/NoControlado';

const App = () => {
  return (
    <div className='container'>
      <h1>Formularios</h1>
      <NoControlado />
    </div>
  );
};

export default App;
```

> Llamaremos en el `index.html` la cdn de boostrap para utilizar sus estilos

Quedando nuestro componente, así:
```js
import NoControlado from './components/NoControlado';

const App = () => {
  return (
    <div className='container'>
      <h1>Formularios</h1>
      <NoControlado />
    </div>
  );
};

export default App;
```

- El archivo `main.jsx` quedaría así:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

```
Para hacer nuestros formularios, necesitamos la etiqueta `form`, no necesitamos la representación de fragment `<> </>`



