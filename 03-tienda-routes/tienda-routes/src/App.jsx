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
