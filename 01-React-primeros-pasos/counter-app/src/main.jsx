import React from 'react';
import ReactDOM from 'react-dom/client'; //estos elementos necesito p/renderizar mi app

//qué vamos a renderizar?
//estos componentes no son más que funciones
function App() {
    //esto es algo como document.createElement...
    return (<h1>Hola Mundo!!!</h1>);
}

//rendericemos
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);