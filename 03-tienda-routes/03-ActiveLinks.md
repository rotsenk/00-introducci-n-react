# Active Links
La mayoría de las aplicaciones web tienen secciones de navegación persistentes en la parte superior de la interfaz de usuario, la barra lateral y, a menudo, en varios niveles. Diseñar los elementos de navegación activos para que el usuario sepa dónde están (isActive) o hacia dónde van (isPending) en la aplicación se hace con `<NavLink>`.

agregamos al css lo siguiente:
```css
nav a.is-active{
  font-weight: bold;
  pointer-events: none;
}
```

Modificamos a que sea un NavLink
tenemos que importarlo

`import { Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom';`

Le colocaremos la clase si es activo que se le habilite pero que si no está activo, simplemente indefinido.
```js
<header>
    <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><NavLink className={({isActive}) =>{ return isActive ? 'is-active' : undefined}} to='/'>Home</NavLink></li>
            <li><Link to='/search-page'>Search Page</Link></li>
          </ul>
        </nav>
</header>
```

Pero, qué pasa si yo quiero hacer un componente propio de NavLink para optimizar
Cambio a un apodo el NavLink de React Router así `import { Route, Routes, Link, useParams, Outlet, NavLink as NL } from 'react-router-dom';`

Podemos hacerlo...

```js
//Componente NavLink
const NavLink = ({to, children, ...props}) => {
  return(
    <NL
    {...props}
      className={({isActive}) => { 
        return isActive ? 'is-active' : undefined
      }} 
      to={to}
      > {children}
      </NL>
  )
}
```
`NavLink`: Es el nombre del componente que estás definiendo. Este nombre puede ser utilizado luego como un componente en tu aplicación.
`({ to, children, ...props })`: Esta es la sintaxis de desestructuración de objetos en los parámetros de entrada de la función. Está extrayendo las propiedades to y children del objeto de props. El operador de rest `...props` recoge cualquier otra propiedad pasada al componente y las agrupa en un objeto llamado props.


hemos creado un component que lo que hace es utilizar el `NavLink` de React Router y lo envolvemos y le damos una forma personalizada, en lugar de estar repitiendo todo eso en todos los links, lo podríamos embellecer mucho más, claro con css pero para fines de ejemplo, es mejor así sencillo

Ahora, sólo mandamos a llamar en los que antes eran `Link`
```js
<header>
    <h1>Hola desde App</h1>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search-page'>Search Page</NavLink></li>
          </ul>
        </nav>
</header>
```