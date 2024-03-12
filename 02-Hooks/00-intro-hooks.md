# Introducción a Hooks
Web de referencia: https://jonmircha.com/react#hooks
Nos permite enganchar el concepto del estado.

## Ejemplo Sencillo
```js
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Efecto que se ejecuta después de cada renderizado
  useEffect(() => {
    document.title = `Contador: ${count}`;
  });

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default ExampleComponent;
```
En este ejemplo:

- Hemos creado un componente llamado `ExampleComponent`.
- Utilizamos el estado `count` para almacenar un valor numérico.
- El efecto dentro de `useEffect` se ejecutará después de cada renderizado del componente.
- En este caso, actualizamos el título del documento con el valor actual de `count`.

## Ejemplo del manejo del Estado de la red en nuestro ordenador
Crearemos un componente que se llame `RedState.jsx` dentro de la carpeta `src` que contendrá inicialmente el siguiente código:
```js
import React from 'react';

function EstadoRed() {
  return (
    <div>
      <h1>Hola Soy el Componente Estado de la Red</h1>
    </div>
  )
}

export default EstadoRed;
```

Quedando el `main.jsx` de la siguiente manera:
```js
import React from "react";
import ReactDOM from 'react-dom/client';
import EstadoRed from "./RedState";


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <EstadoRed />
    </React.StrictMode>
);
```

En este ejemplo haremos `useNetworkStatus` es un *Custom Hook* que **encapsula** la lógica para rastrear el estado de la red. Puedes usarlo en cualquier componente que necesite esta funcionalidad.

## Código paso a paso
**Importación de Módulos:**
- Importamos los Hooks necesarios de React dentro de nuestro archivo `RedState.jsx` que serían: "useState" y "useEffect".
`import React, { useEffect, useState } from "react";` 

**Creación del Custom Hook (useNetworkStatus):**

- Definimos una función llamada `useNetworkStatus`.
```js
function useNetworkStatus() { 
  // código aquí ...
}
```
- Utilizamos el **Hook** `useState` para declarar una variable de estado llamada isOnline con un valor inicial de *true*.
```js
function useNetworkStatus() { 
  const [isOnline, setIsOnline] = useState(true);
  // código aquí ...
}
```

- Luego, utilizamos el **Hook** `useEffect` para suscribirnos a los eventos globales de conexión y desconexión (online y offline).
```js
function useNetworkStatus() { 
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Lógica de efecto secundario aquí
    // Por ejemplo, llamadas a APIs, inicialización de variables, etc.
    
    // Opcionalmente, puedes devolver una función de limpieza
    return () => {
      // Lógica de limpieza aquí (si es necesario)
    };
  }, [/* Dependencias */]);

  // Resto del componente...
}
```
> dependencias (opcional): Es una lista de valores reactivos (como props, estados o variables declaradas dentro del componente) que se utilizan dentro de la función de configuración. Si no se especifican dependencias, el efecto se ejecutará después de cada renderizado del componente.

- nuestro useEffect quedaría así:

```js
//useEffect para suscribirnos a los eventos globales de conexión
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    /**Utilizamos la función de retorno en useEffect 
     * para eliminar los event listeners 
     * cuando el componente se desmonta.*/
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return [isOnline, setIsOnline];
```
- Cuando ocurren estos eventos, se ejecutan las funciones `handleOnline` y `handleOffline`, respectivamente.
- Finalmente, el *Custom Hook* devuelve el valor actual de `isOnline`.

**Manejo de Eventos de Conexión y Desconexión:**
- Las funciones handleOnline y handleOffline actualizan el estado de isOnline según el estado de la conexión.

**Uso del Custom Hook en un Componente (EstadoRed):**
- Creamos un componente llamado EstadoRed.
- Dentro de este componente, utilizamos el Custom Hook useNetworkStatus para obtener el estado de la conexión (isOnline).
- Dependiendo del valor de isOnline, mostramos “✅ En línea” o “❌ Desconectado”

```js
function EstadoRed() {
  const isOnline = useNetworkStatus();

  return (
    <>
      <h1>{ isOnline ? '✅ En línea.' : '❌Desconectado.' }</h1>
    </>
  );
}

export default EstadoRed;
```

Si queremos probar qué pasa cuando la red no está conectada, podríamos poner en modo vuelo nuestro ordenador, pero en este caso mejor cambiaremos el valor del useState a *false*

## Agregar un botón que cambie el estado
Supongamos que queremos un botón que cambie el estado que si está en linea lo desconecte, y si está desconectado que lo ponga en línea.
¿Cómo lo haríamos?

```js
function EstadoRed() {
  const [isOnline, setIsOnline] = useState(true); // Agrega esta línea

  const handleDesconectar = () => {
    setIsOnline(false);//cambiar el estado a false, con el setter 
  };

  return (
    <>
      <h1>{isOnline ? "✅ En línea." : "❌ Desconectado."}</h1>
      <button onClick={handleDesconectar}>Desconectar</button>
    </>
  );
}

export default EstadoRed;
```
Pero, realmente esto, sólo serviría para desconectar la red, qué pasa si quiero un botón de encender y apagar?

```js
function EstadoRed() {
  const [isOnline, setIsOnline] = useState(true); // Agrega esta línea

  const handleDesconectar = () => {
    setIsOnline((prevIsOnline) => !prevIsOnline); // Cambia el estado al valor opuesto
  };

  return (
    <>
      <h1>{ isOnline ? '✅ En línea.' : '❌Desconectado.' }</h1>
      <button onClick={handleDesconectar}>{isOnline ? "🔴" : "🟢"}</button>
    </>
  );
}

export default EstadoRed;
```
`prevIsOnline` es un parámetro que se utiliza en la función de actualización del estado en React. En el contexto de tu componente `EstadoRed`, `prevIsOnline` representa el valor actual del estado `isOnline`.

- Código completo:
```js

```