# Nested Routes

Rutas anidadas, por ejemplo, pueda ser que dentro de acá `<Route path='/series/:nameSerie' element={<Series />} />` queramos renderizar, envolveríamos las rutas...

En lugar de ponerle `"/details"` sólo le ponemos `"details"` porque las rutas se están renderizando, así que sólo usamos la ruta relativa porque sino no sería capaz de saber cuál sería la ruta, y lo que queremos es que preserve la ruta anterior, por lo tanto es ruta relativa, así sin la barra

```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/search-page" element={<SearchPage />} />
  <Route path="/series/:nameSerie" element={<Series />}>
    <Route path="details" element={<SerieDetails />} />
  </Route>
</Routes>
```
luego creamos la constante...
```js
//creando el componente para detalles de la serie
const SerieDetails = () => {
  const { serie } = useParams();

  return(
    <h1>Detalle de la serie {serie}</h1>
  )
}
```

también colocamos un enlace dentro del componente Series para que me dirija hacia los detalles de la serie
```js
const Series = () => {
  const { nameSerie } = useParams();
  
  //creamos el Link...
  return (
    <div>
      <h1>Series</h1>
      {nameSerie}
      <Link to='details'>Ir a los detalles</Link>
    </div>
  )
}
```
Aunque le hayamos colocado así, no nos está renderizando nada... claro, es que si queremos tener rutas anidadas tenemos que decirle que en algún lugar debe renderizarse, para ello, existe un componente que se llama `Outlet` es como ponerle un hueco, y decirle: mira, la ruta que está siendo anidada tiene que renderizarse en tal lugar...

y lo colocamos justo debajo del componente de Series donde vemos el nombre de serie, aunque se puede mover donde nosotros consideremos
```js
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
```

Ahora podemos ver los segmentos dinámicos en la url, manteniendo todo el layout

## Cómo se hace el 404?
Para hacer un 404 debemos crear otra ruta y decirle al path que tome un asterísco, es decir todas las rutas
```js
<Route path='*' element={<h1>Not Found</h1>} />
```

Si ahora intentamos acceder a una ruta por medio de la url, y esa ruta no existe, nos va a dar error
> esto es un 404 soft, que si miramos en la red, ese es un status 200, se está mostrando al cliente, pero no se lo estamos diciendo al bot, o a Google. La ÚNICA forma que nosotros tenemos para lanzar un 404 es desde el servidor, jamás desde el cliente.

Lo que tiene react router es un sistema que va a detectar cuál ruta es más importante, acorde el número de segmentos, independientemente el orden que tengan las rutas, hace como un css, y verifica el path que sea más específico para tener sentido entrar, el orden ya no tiene relevancia.

