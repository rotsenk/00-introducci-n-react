import React, { useState } from 'react';
import './App.css';
import { Route, Routes, Link, useParams, Outlet } from 'react-router-dom';

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

const Series = () => {
  const { nameSerie } = useParams();
  
  //creamos el Link...
  return (
    <div>
      <h1>Series</h1>
      {nameSerie}
      <Link to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}

//creando el componente para detalles de la serie
const SerieDetails = () => {
  const { serie } = useParams();

  return(
    <h1>Detalle de la serie {serie}</h1>
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
        <Route path='/series/:nameSerie' element={<Series />}>
          <Route path='details' element={<SerieDetails />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
