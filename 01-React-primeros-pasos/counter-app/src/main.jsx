import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
    </React.StrictMode>
);

