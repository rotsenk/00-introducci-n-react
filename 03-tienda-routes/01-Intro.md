# Crearemos nuestra aplicación con VITE
> sitio de react router v6: https://reactrouter.com/en/6.22.3/start/overview

Crear la app
`npm init vite@latest tienda-routes -- --template react`

acceder a la carpeta
`cd tienda-routes`

instalar dependencias
`npm install`

ejecutar app
`npm run dev`

instalar eslinter
`npm install standard -D`

ir a `package.json` y configurar debajo de "devDependencies"

```json
"eslintConfig":{
    "extends": ["standard"]
  }
```
> en todo caso que no funcione podemos colocar en lugar de "standar" esto: `"./node_modules/standard/eslintrc.json`

Cambiar nuestro componente `App.jsx` con este código:

```js
import React from 'react'
import './App.css';

function App() {
  return (
    <div className='App' >
      hola desde App
    </div>
  )
}

export default App

```

ahora que tenemos esto, vamos a instalar react router dom, la versión exacta
`npm install react-router-dom -E`

Qué es react router y react router dom?
react router es una biblioteca que tiene el core del enrrutado, no tiene la api suficiente para conectarse con el navegador en cambio react router dom sí
así que si queremos usar en el navegador usaremos react router dom

Después verificar si se instaló en el `package.json`

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
```


# Indicar que queremos usar las rutas
https://reactrouter.com/en/main/start/overview

Nos dirigimos `main.jsx` y vemos que está así:
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

borramos Strictmode, y lo que tenemos que hacer es utilizar BrowserRouter, envolviendo nuestra App
 ```js
 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

# Cambiemos lo que se presenta en `App.jsx`
Para ello nos dirigimos a nuestro componente, y verificamos:
```js
import React from 'react'
import './App.css';

function App() {
  return (
    <div className='App' >
      hola desde App
    </div>
  )
}

export default App
```

Podemos verificar esto:
```js
import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda
const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1> 

function App() {
  return (
    <div className='App' >
      <p>hola desde APP</p>
      <Home />
      <SearchPage />
    </div>
  )
}

export default App

```

Ahora que ya vemos que funciona, debemos decir el path donde se renderice el elemento
Listamos nuestras rutas, pasamps el path y luego el elemento que queremos renderizar
Luego, como nos lee la ruta por default que es el inicio, la otra ruta tenemos que buscarla en el navegador
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1> 

function App() {
  return (
    <div className='App' >
      <p>Esto es útil dejar fuera de las páginas para que se renderice siempre, por ejemplo un header</p>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-page' element={<SearchPage/>} />
      </Routes>
    </div>
  )
}

export default App
```
Agregando un header y menú con nav
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1> 

function App() {
  return (
    <div className='App' >
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/search-page'>Search Page</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-page' element={<SearchPage/>} />
      </Routes>
    </div>
  )
}

export default App
```
Con estas etiquetas de enlace, no se debería hacer así para SPA, porque son navegaciones, normales y corrientes, y es lo que hacen en el navegador, navegar.

> Estilar un poco el css lo que es `index.css` y `App.css` 

# Cambiamos la url sin navegar
Para eso importamos el Link, y lo utilizamos en lugar de la etiqueta `a`, para que no tenga que estar navegando ni recargando la página.
Se puede notar la diferencia abismal, ahora sí se ha hecho una Single Page Application, que se recarga una vez y luego navega todo el rato
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda

const Home = () => <h1>Home</h1>

const SearchPage = () => <h1>Search Page</h1> 

function App() {
  return (
    <div className='App' >
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-page' element={<SearchPage/>} />
      </Routes>
    </div>
  )
}

export default App
```

## Podríamos colocar los Links dentro dentro de su Component
En este caso podemos mover los Links dentro de cada uno de sus componentes como SearchPage, Home, implementando uno que sea de Series
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const series = '/Series';

  return(
    <div>
      <h1>Search Page</h1>
      <Link to={series}>Series</Link>
    </div>
  )
};

const Series = () => <h1>Aquí debe haber series</h1>

function App() {
  return (
    <div className='App' >
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search-page' element={<SearchPage/>} />
        <Route path='/series' element={<Series/>} />
      </Routes>
    </div>
  )
}

export default App
```
> Pero pasa algo... Imaginemos que en la página de Search nosotros tenemos una búsqueda de series. Buscamos la serie y luego que tenemos un montón de series, tendríamos muchos nombres de series.

Así que convertimos en una lista en lugar de tener un link de series
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';

//nos gustaría tener una ruta que fuese home, y otra que fuese Búsqueda

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  //esto lo convertiríamos en una lista en lugar de tener el link a Series
  const series = [
    'The Vampire Diaries',
    'Supernatural',
    'Game Of Thrones',
    'Stranger Things'
  ]

  //retornamos
  /**El método map() es utilizado para transformar cada elemento 
   * del array de acuerdo a una función dada.*/
  return(
    /**El atributo key se utiliza para ayudar a React 
     * a identificar de manera única cada elemento en una lista
     * y optimizar su renderizado */
    <div>
      <h1>Search Page</h1>
      {series.map(serie => (
        <ul>
          <li key={serie}> <Link to={`/series/${serie}`}>{serie}</Link> </li>
        </ul>
      ))}
    </div>
  )
};

const Series = () => <h1>Series</h1>

function App() {
  return (
    <div className='App' >
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/series/:name' element={<Series />} />
      </Routes>
    </div>
  )
}

export default App
```
En este caso, si presionamos cualquier serie, se dirige a la página de series porque se está renderizando esto:
`const Series = () => <h1>Series</h1>` y lo que quiero, es que dependiendo de cada uno de los nombre de las series, yo quiero su información, cómo hacemos para sacar la información de `path='/series/:name'`
Pues esta información la podemos sacar usando un Hook, el hook `useParams` captura segmentos dinámicos y los recupera en un componente.
```js
import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link, useParams } from 'react-router-dom';

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const series = [
    'The Vampire Diaries',
    'Supernatural',
    'Game Of Thrones',
    'Stranger Things'
  ];

  return(
    <div>
      <h1>Search Page</h1>
      <ul>
        {series.map(serie => (
          <li key={serie}>
            <Link to={`/series/${serie}`}>{serie}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

//Modificando Series para extrar con useParams
const Series = () => {
  const { nameSerie } = useParams();//obtenemos las keys del segmento dinámico del path, tiene que llamarse exactamente de donde se extrae
  
  return (
    <div>
      <h1>Series</h1>
      {nameSerie}
    </div>
  )
}

function App() {
  return (
    <div className='App' >
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/series/:nameSerie' element={<Series />} />
      </Routes>
    </div>
  )
}

export default App
```
Continuaremos con Nested Routes en la próxima sección...