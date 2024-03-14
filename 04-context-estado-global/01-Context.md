# Creación del Contexto
Crearemos en `/src` una carpeta llamada `/contexts` y dentro crearemos nuestra `dataContext,jsx` y vamos a importar `createContext` desde `react` para que nos permita crear un contexto dentro del cual podamos guardar info y luego nuestros componentes puedan acceder

## ¿Cómo acceden a la info los componentes?
Pues, lo que se hace es agarrar todos los componentes que queremos que tengan acceso a la info, y envolverlos con un componente especial que guarda al contexto, basicamente el contexto es ese componente expecial para que los que estén en su interior tengan acceso a la info

```js
import { createContext } from "react";

//usar esta funcion para crear un contexto
export const DataContext = createContext(); //lo que ejecutemos se guarda acá

//Crear el componente que envuelve a todos los componentes
//Proveedor
export function DataContextProvider(props) {
  //aquí en este componente pondremos la info que queremos compartir
  const contextData = 20;

  const valor = contextData; //hago esto por claridad
  //porque en nuestro proveedor tenemos que indicar
  //cuál es el valor que queremos compartir

  //devolvemos el componente que guarde la info
  //pero para que este devuelva eso
  //tenemos que indicarle que este proveedor admite componentes en su interior
  return (
    <DataContext.Provider value={valor}>
        { props.children }
    </DataContext.Provider>
  );
}

```

## Envolver nuestros componentes
Para envolver nuestros componentes, tenemos que ir al `main.jsx` y vamos a importar el Proveedor
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import CompA from "./components/CompA.jsx";
import "./index.css";
import { DataContextProvider } from "./contexts/dataContext.jsx";//importación

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <CompA />
    </DataContextProvider>
  </React.StrictMode>
);
```

## Acceder desde cualquier componente
```js
import { createContext } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const contextData = 20;//todos los componentes pueden acceder

  const valor = contextData;

  return (
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
  );
}
```

Vamos al Componente donde necesitamos el valor, pero tenemos que importar el useContext, que nos pide a qué contexto vamos a acceder, qué información queremos?

```js
import React, { useContext } from 'react'
import { DataContext } from '../contexts/dataContext'
//ahora sencillamente, dentro del componente hacemos una constante
//que tome la referencia del contexto que creamos en nuestra carpeta
//de contexts

//luego simple y sencillamente pasamos contextData en nuestro elemento
function CompE() {
  const contextData = useContext(DataContext);
  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: { contextData } </h3>
    </section>
  )
}

export default CompE
```
Ahora ya tenemos esa información sin necesidad de pasar por todos los componentes

## Qué pasa si quiero hacerlo más complejo?
Lo que podríamos hacer que en lugar de guardar un número, podamos guardar un estado que sea compartido de forma global con nuestra app

- Importamos useState
- Convertimos en estado la constante

```js
import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [ contextData, setContextData] = useState(20);

  //si hablamos de estado global, seguramente voy a necesitarlo
  //modificar en distintas partes de mi app
  //es importante enviar el estado y la función que modifica (el setter)
  const valor = { contextData, setContextData };

  return (
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
  );
}

```
> Vamos a tener que actualizar el componente E, donde estamos recibiendo ese valor, dado que es ahora un objeto, voy a tener que destructurarlo

```js
import React, { useContext } from 'react'
import { DataContext } from '../contexts/dataContext'

function CompE() {
  //modificamos
  const { contextData } = useContext(DataContext);
  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: { contextData } </h3>
    </section>
  )
}

export default CompE
```

Podemos ir al componente B y hacer lo mismo
```js
import React, { useContext } from 'react'
import CompC from './CompC'
import { DataContext } from '../contexts/dataContext'
//importar



function CompB() {
  //llamar el estado, la función de react con la referencia del contexto
  const { contextData } = useContext(DataContext);
  return (
    <section id='compB'>
      <h2>&lt;Componente B /&gt;</h2>
      <h3>Datos: { contextData }</h3>
      <CompC />
    </section>
  )
}

export default CompB
```
Ahora ya podemos ver reflejado ese dato en nuestro componente B

Pero la magia NO termina acá, al estar compartiendo un estado con todo nuestro arbol de componentes cualquiera de ellos puede modificar el estado y se verá reflejado siempre

Agreguemos un botón en el componente E
```js
import React, { useContext } from 'react'
import { DataContext } from '../contexts/dataContext'

function CompE() {
  //destructuramos
  const { contextData, setContextData } = useContext(DataContext);
  //y luego pasamos al botón una arrowfunction
  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: { contextData } </h3>
      <button 
        onClick={() => setContextData 
            ( contextData + 1)
        } > 
        Sumar 1
      </button>
    </section>
  )
}

export default CompE
```
Ahora podemos ver esta maravilla, que toma un estado, lo saca y lo envía al contexto (al provider que envuelve) y magicamente pueden acceder todos a esa info, evitando líos

## Evitar errores optimizando código
Vamos a hacer un Custom Hook (personalizado) en el que colcoaremos nuestro context para poder ser usado en los componentes que necesitamos
Esto en `dataContext`
```js
//exportamos esta nueva función
export function useDataContext(){
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext debe ser usado dentro de un Proveedor')
    }
    return context;
}
```
- `export function useDataContext():` Esto define una función llamada useDataContext que se puede exportar y utilizar en otros archivos. La palabra clave export permite que esta función sea accesible desde otros módulos.
- `const context = useContext(DataContext);`: Dentro de la función, se utiliza el hook useContext de React. Este hook permite acceder al contexto proporcionado por un proveedor. En este caso, se espera que exista un proveedor llamado DataContext.
- `if (!context) { throw new Error('useDataContext debe ser usado dentro de un Proveedor') }`: Aquí se verifica si el contexto existe. Si no existe (es decir, si no se ha proporcionado un proveedor), se lanza un error con el mensaje “useDataContext debe ser usado dentro de un Proveedor”. Esto ayuda a garantizar que la función solo se utilice dentro del contexto adecuado.
- `return context;`: Finalmente, la función devuelve el contexto. Esto significa que cualquier componente que llame a `useDataContext` obtendrá acceso a los datos proporcionados por el proveedor DataContext.

- En resumen, esta función se utiliza para acceder a los datos almacenados en el contexto proporcionado por el proveedor `DataContext`. Si no se encuentra el contexto, se lanza un error para evitar problemas en la aplicación. Es una práctica común en aplicaciones de React que utilizan el patrón de administración de estado global con Context API.

## Modificando el Componente B
Con esto terminamos, vemos que context es súper útil
```js
import React from 'react' //eliminamos useContext
import CompC from './CompC'
import { useDataContext } from '../contexts/dataContext';
//import { DataContext } from '../contexts/dataContext'

function CompB() {
  //ejecutamos nuestro custom hook
  const { contextData } = useDataContext();//este es mucho más conveniente porque resulta más práctico más legible
  return (
    <section id='compB'>
      <h2>&lt;Componente B /&gt;</h2>
      <h3>Datos: { contextData }</h3>
      <CompC />
    </section>
  )
}

export default CompB
```
## Podemos usar context para distintos propositos
- Información de usuarios
- Info de estado global
- Info del tema en las apps
 
Podemos tener varios providers...

Pero con esto terminamos. Espero se haya comprendido.