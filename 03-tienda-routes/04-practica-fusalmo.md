```js
import React from "react";
import "./App.css";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";

const Home = () => <h1>Home</h1>;

/**crear una constante llamada data 
 * en donde le pasemos los datos de cada uno de móviles */
const data = {
  Samsung: {
    desc: "A54", 
    precio: "$500.00",
    feat: "Resistente al agua"
  },
  LG: {
    desc: "ThinQ v60", 
    precio: "$400.00",
    feat: "Cámara PRO"
  },
  Xiaomi: {
    desc: "Xiaomix", 
    precio: "$540.00",
    feat: "Cámara PRO"
  },
  iPhone: {
    desc: "XR", 
    precio: "$999.00",
    feat: "Cámara PRO"
  },
};

const SearchPage = () => {
  const celulares = ["Samsung", "LG", "Xiaomi", "iPhone"];

  return (
    <div>
      <h2>Página de Búsqueda</h2>

      <ul>
        {celulares.map((celular) => (
          <li key={celular}>
            <Link to={`/celulares/${celular}`}>{celular}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

//en este componente debemos colocar el link hacia los detalles
/**existe un componente que se llama `Outlet` es como ponerle un hueco, 
 * y decirle: mira, la ruta que está siendo anidada tiene que 
 * renderizarse en tal lugar... */
const Celulares = () => {
  const { nameCelular } = useParams();

  return (
    <div className="features" >
      <h2>Info de Celulares</h2>
      {nameCelular}
      <Link to='details'> Ir a ver detalles </Link>
      <Outlet />
    </div>
  );
};

/**Creamos un componente para los detalles del celular seleccionado */
const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = data[nameCelular];//hacemos la referencia a la data

  return (
    <div>
      <h1>Detailsss {nameCelular} </h1>
      <p>Precio: {detalles.precio}</p>
      <p>Modelo: {detalles.desc}</p>
      <p>Características: {detalles.feat}</p>
    </div>
  )
};

function App() {
  return (
    <div>
      <header>
        <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-page">Página de Búsqueda</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/celulares/:nameCelular" element={<Celulares />} >
        
          <Route path="details" element={ <CelularDetails /> } />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
```