import React from "react";
import "./App.css";
import { Routes, Route, Link, useParams, Outlet, NavLink as NL } from "react-router-dom";

const Home = () => {
  return(
    <div className="features">
      <h2>Bienvenido</h2>
      <p>Somos una tienda online de celulares.</p>
    </div>
  )
};

const dataCelu = { 
  Samsung: {
    modelo: "A54",
    precio: "$500.00",
    desc: "Resistente al agua"
  }, 
  LG: {
    modelo: "ThinQ v60",
    precio: "$550.00",
    desc: "Pantalla de varias pulgadas"
  }, 
  Xiaomi: {
    modelo: "Poco c40",
    precio: "$400.00",
    desc: "Calidad Precio"
  }, 
  iPhone: {
    modelo: "XR",
    precio: "$9,999.00",
    desc: "Cámara bonita!"
  }, 
};

const SearchPage = () => {
  const celulares = [
    "Samsung", 
    "LG", 
    "Xiaomi", 
    "iPhone",
  ];

  return (
    <div className="features cambio" >
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

//Componente para llamar el nombre del celular seleccionado
const Celulares = () => {
  const { nameCelular } = useParams(); //obtenemos las keys del segmento dinámico del path

  return (
    <div className="features" >
      <h2>Info de Celulares</h2>
      <h2>{ nameCelular }</h2>
      <Link to='details'> <p>Ver detalles</p> </Link>
      <Outlet />
    </div>
  );
};

//Componente para los detalles del celular seleccionado
const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = dataCelu[nameCelular];//hacemos la referencia a la data

  return(
    <div>
      <h3>Detalles del móvil { nameCelular } </h3>
      <h4>Modelo: {detalles.modelo} </h4>
      <h4>Precio: {detalles.precio} </h4>
      <h4>Descripción: {detalles.desc}</h4>
    </div>
  )
};

//Componente para encapsular todo lo de NavLink
const NavLink = ({to, children, ...props}) => {
  return(
    <NL {...props} 
        className={
          ( {isActive} ) => { 
            return isActive ? 'is-active' : undefined 
          }} 
          to={to}> {children}
    </NL>
  )
}

function App() {
  return (
    <div>
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Página de Búsqueda</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/celulares/:nameCelular" element={<Celulares />} > 
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={ <h1>Page Not Found</h1> } />
      </Routes>
    </div>
  );
}

export default App;
