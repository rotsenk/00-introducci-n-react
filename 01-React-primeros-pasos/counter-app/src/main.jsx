import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy el Titulo" subTitle="123"/>
    </React.StrictMode>
);

