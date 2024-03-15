# Esta pequeña app será estilizada con Styled Components
Existe una utilidad muy popular que nos permite estilar nuestros componentes y reutilizarlos en nuestra aplicación, esto es basado en CSS pero con ventajas de que no nos preocuparemos por clases sino que nos crea hashes únicos para nuestros components.

url: https://styled-components.com

# Intro
Permite crear o darle la visualización con CSS a elementos HTML o a componentes que acepten la *prop* `className` para volverlos a utilizar, de forma que podamos reutilizar de forma que vamos a poder separar la parte visual de la parte funcional.

# Botón
Agregamos un botón `<Link to="/search-page"><button>Ver Más</button></Link>` en nuestro componente `Home` debajo del texto `<p>`

```js
const Home = () => {
  return(
    <div className="features">
      <h2>Bienvenido</h2>
      <p>Somos una tienda online de celulares.</p>
      <Link to="/search-page"><button>Ver Más</button></Link>
    </div>
  )
};
```

# Instalación de Styled Components
- Nos dirigimos al package.json y colocamos en dependencias `"styled-components": "6.1.8"`
```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "styled-components": "6.1.8"
  },
```
## Ejecutar NPM
ejecutamos en la consola un `npm install` para que se instalen las dependencias de *Styled*

# Creación de un componente que se llame `Button.jsx`
```js
import styled from 'styled-components';

//todos los elementos de html se pueden estilar de esta forma
export const Button = styled.button`
    background-color: #DFF5FF;
    font-size: 1em;
    margin: 1em;
    padding: 8px;
    border: 1px solid #09f;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 0px;
`;
```
- Ahora nos dirigimos hacia el componente de `App.jsx` importamos el componente `import { Button } from "./Button";` y hacemos el cambio del botón normal, por nuestro componente `Button` 
```js
const Home = () => {
  return(
    <div className="features">
      <h2>Bienvenido</h2>
      <p>Somos una tienda online de celulares.</p>
      <Link to="/search-page"><Button>Ver Más</Button></Link>
    </div>
  )
};
```
Estos aceptan las props, los pseudoelementos, las pseudoclases, como cuando hacemos hover

Vemos los enlaces de nuestro header, esos son `>Link>` no son `<a>` y se pueden estilar.

Creamos otro componente, que se llame `StyledLink.jsx`
```js
import styled from "styled-components";
import { Link } from "react-router-dom";

//podemos estilar CUALQUIER componente que acepte className
export const StyledLink = styled(Link)`
    color: #09f;
    text-decoration: none;

    &:hover{
        border-bottom: 2px solid #09f;
    }
`;
```

Luego importamos en `App.jsx` el componente `import { StyledLink } from "./StyledLink";`
luego, en nuestro SearchPage, cambiamos `Link` por `StyledLink`

```js
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
            <StyledLink to={`/celulares/${celular}`}>{celular}</StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
```
una de las ventajas es que esto te crea un hash único, y no tenemos que preocuparnos por las clases, porque se genera un className que no colisiona con ningún otro. también es que lo tienes en JavaScript

# Theming
Dígamos que tenemos un theming, en nuestra app, este componente lo podemos importar en los styledcomponents

creamos un componente llamado `theme.jsx` 
```js
export const colors = {
    primary: 'blue',
    secondary: 'darkgray',
    danger: 'red',
}
```

En js tenemos todo el theming, y lo podemos importar y usar facilmente.

- Importamos `import { colors } from "./theme";` dentro de nuestro StyledLink
- Quedaría listo para ser usado

```js
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";


//podemos estilar CUALQUIER componente que acepte className
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 1.3em;

  &:hover {
    border-bottom: 1px solid #071952;
  }
`;
```
Esta es una forma sencilla de hacerlo, de forma que si un día decidas que una variable de colors cambie, simplemente entras al archivo del tema y lo modificas, similar al uso de sass con bootstrap.

- Crearemos un componente para la información de celulares, el detalle.
```js
export const DetailsContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;
```

y lo llamaremos en App.jsx, en lugar de poner `div` pondremos `DetailsContainer`
```js
//Componente para los detalles del celular seleccionado
const CelularDetails = () => {
  const { nameCelular } = useParams();
  const detalles = dataCelu[nameCelular];//hacemos la referencia a la data

  return(
    <DetailsContainer >
      <h3>Detalles del móvil { nameCelular } </h3>
      <h4>Modelo: {detalles.modelo} </h4>
      <h4>Precio: {detalles.precio} </h4>
      <h4>Descripción: {detalles.desc}</h4>
    </DetailsContainer>
  )
};
```

también cambiaremos el estilo del link del ver más
`<StyledLink to='details'> Ver detalles </StyledLink>`