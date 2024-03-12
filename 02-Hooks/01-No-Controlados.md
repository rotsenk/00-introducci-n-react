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

Podemos dejar así nuestro componente `NoControlado.jsx`:
```js
const NoControlado = () => {
  return (
    <form>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
      />
      <select className="form-select mb-2">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```
Cuando nosotros trabajamos con vanilla JS, tenemos la opción de colocar a cada input un id y a partir de ese, capturar su valor, y también formData, que hace un recorrido por todo el formulario y captura los datos, necesitamos el atributo name

```js
const NoControlado = () => {
  return (
    <form>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```

Ahora tenemos que pasarle un atributo al formulario para que reciba datos, se hace con el evento onSubmit

```js
const NoControlado = () => {

  const handleSubmit = () => {
    console.log("Me diste submit");
  };
  // recordemos que handle, sólo es una convención para poder llamar a las funciones que estén controladas por eventos

  //le pasamos el handle a onSubmit
  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```
> Verifiquemos en el navegador qué sucede si le pasamos parámetros y damos clic al botón de submit, se guardan los datos de los atributos en la url, y aparece por milésimas de segundos lo que pintamos en el console.log, lo que está haciendo el navegador es enviar los datos por medio del atributo action aunque nosotros no lo coloquemos en el formulario

Esto es muy parecido a hacer document.addEventListener y pasarle algo, porque tienen en común que quieren controlar todo

- tenemos que evitar que el navegador quiera enviar esos datos
```js
const NoControlado = () => {

  /*pasemos al handle un evento que haga que evite que el navegador quiera pasar 
  * esos datos aunque no estén los atributos
  */ 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Me diste submit");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```

## Procesar datos de cada uno de los elementos
En js usaríamos un id en el form para capturar todos los datos y procesar, sin embargo en react no es recomendable hacerlo así porque recuerden que react de forma paralela maneja el virtual DOM para compararlo con el DOM real, y si nosotros hacemos eso de pasarle el id para extraer todos los datos pues react se va a confundir con su DOM virtual y no podría hacer la comparación correcta.

> Pero tenemos una solución, y para eso son las referencias, usando hooks.

Cuando referenciamos, es como que estemos haciendo algún querySelector con el id, pero a diferencia que con el querySelector se manipula directamente el DOM, y con las referencias, o sea el hook de ref, se hace por medio de react a través del virtual DOM y así react puede hacer la comparación y los cambios en tiempo real

> así que cada que querramos hacer una referencia al DOM tenemos que usar el useRef, y en vez del id del formulario, usaremos ref

```js
import { useRef } from 'react';

const NoControlado = () => {

  const form = useRef(null);//por qué inicializarlo en nulo?
  //porque cuando nosotros creamos esta referencia aún no está renderizado nuestro formulario
  //cada que tengamos que hacer una captura manual del dom, usamos useRef
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Me diste submit");
    console.log(form);//si pasamos este clg del form, veamos qué sucede
    //tenemos una llave current y el form, y es mucho más cómodo acceder al current y capturar los datos.
  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```

## Utilizando el FormData
verificamos el uso de FormData como muestra nada más
```js
import { useRef } from 'react';

const NoControlado = () => {

  const form = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    //nuestros formularios con cada uno de nuestros inputs es un form.current

    console.log(new FormData(form.current));//al ver esto, se nos muestran un montón de propiedades
    //las que nos interesan son las entries
  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="Pendiente">Pendiente</option> 
        <option value="Completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```
Entonces, procesamos los datos
```js
import { useRef } from 'react';

const NoControlado = () => {

  const form = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(new FormData(form.current));

    const data = new FormData(form.current);//guardamos en una variable para que sea más cómodo a la vista
    console.log([...data.entries()]);//para procesar formularios, NO OLVIDAR los atributos name

  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
          defaultValue="Tarea 1"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
          defaultValue="Descripción 1"
      />
      <select className="form-select mb-2" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option> 
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
``` 
Como nos muestra arrays, pero esos arrays son complicados de manejar, la mejor forma es hacerlo mediante objetos

```js
import { useRef } from 'react';

const NoControlado = () => {

  const form = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(form.current);
    //console.log([...data.entries()]);

    //técnica para procesar como objetos
    const dataObject = Object.fromEntries([...data.entries()]);//pasamos el spread operator de data.entries
    //el spread operator permite un elemento iterable ser expandido
    //El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
    console.log(dataObject);

  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
          defaultValue="Tarea 1"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
          defaultValue="Descripción 1"
      />
      <select className="form-select mb-2" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option> 
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
    </form>
  );
};

export default NoControlado;
```

## Destructuring...
En esta ocasión vamos a destructurar el Object y a validar los datos

Se pudiese validar datos así:
```js
//validar los datos
    if (title === "") {
      return console.log("Llena este campo");
    }
```
Pero hay algo que se llama trim que valida los elementos

> La idea de los formularios no controlados, es que se controlan cuando presionamos el botón de procesar

```js
import { useRef, useState } from 'react';

const NoControlado = () => {

  const form = useRef(null);
  //para validar
  const [error, setError] = useState("");//vacío quiere decir que no hay error
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');//cada vez que procesamos el formulario lo limpio
   
    //capturar los datos
    const data = new FormData(form.current);
    
    //destructuring...
    //usamos llavecitas y dentro podemos usar cada propiedad
    const {title, description, state} = Object.fromEntries([...data.entries()]);
    console.log(title, description, state);

    //validar los datos
    if (!title.trim() || !description.trim() || !state.trim()) {
      //return console.log("Llena este campo");
      return setError('Llena todos los campos');
    }

    //lo que no haremos con formularios no controlados es enviar los datos
  };
  
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input 
          type="text" 
          placeholder="Ingrese Tarea" 
          className="form-control mb-2"
          name="title"
          defaultValue="Tarea 1"
      />
      <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la descripción"
          name="description"
          defaultValue="Descripción 1"
      />
      <select className="form-select mb-2" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option> 
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-success" type="submit">Procesar</button>
      { error !=="" && error }
    </form>
  );
};

export default NoControlado;
```

> Lo más común es toparse con formularios controlados, pero la idea era que entiendan cómo se procesan los datos con formularios no controlados
