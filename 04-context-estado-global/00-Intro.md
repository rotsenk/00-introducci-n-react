# Aprenderemos Context y Estado Global
Imagínemos una aplicación que en su interior tenga a un componente, y ese componente a otro componente

Creamos una carpeta dentro de `src` que se llame `components` donde guardaremos nuestros componentes A B C D E

Renderizamos `CompA` en nuestro `main.jsx`
En nuestro componente A sería el código inicialmente así:
```js
import React from 'react'
import CompB from './CompB'

function CompA() {
  return (
    <section id='compA'>
      <h2>&lt;Componente A /&gt;</h2>
      <CompB />
    </section>
  )
}

export default CompA

```
Luego, podríamos ir renderizando cada componente dentro del otro
Componente A
```js
import React from 'react'
import CompB from './CompB'

function CompA() {
  const dato = 20;//esta info necesitamos mostrar en Componente E
  //lo que debemos hacer es pasar ese dato a Componente B, pasarlo como un prop
  return (
    <section id='compA'>
      <h2>&lt;Componente A /&gt;</h2>
      <CompB data={dato} />
    </section>
  )
}

export default CompA
```

Componente B
```js
import React from 'react'
import CompC from './CompC'

//luego en el Bomponente B tenemos que a trapar en props y pasarla a Comp C
function CompB({ data }) {
  return (
    <section id='compB'>
      <h2>&lt;Componente B /&gt;</h2>
      <CompC data={data} />
    </section>
  )
}

export default CompB
```

Componente C
```js
import React from 'react'
import CompD from './CompD'

function CompC({ data }) {
  return (
    <section id='compC'>
      <h2>&lt;Componente C /&gt;</h2>
      <CompD data={data}/>
    </section>
  )
}

export default CompC
```

Componente D
```js
import React from 'react'
import CompE from './CompE'


function CompD({ data }) {
  return (
    <section id='compD'>
      <h2>&lt;Componente D /&gt;</h2>
      <CompE data={data} />
    </section>
  )
}

export default CompD
```

Componente E
```js
import React from 'react'

//y así, hasta llegar a Componente E
function CompE({ data }) {
  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: {data}</h3>
    </section>
  )
}

export default CompE
```

## ¿El problema?
Para todo esto tuvimos que estar haciendo *prop drilling*, que es? pues en este ejemplo, a pesar de que los componentes B C y D no necesitan esa info, se las pasa aún así. Lo cual lo vuelve tedioso, y con más líneas de código, menos legible

En este escenario es una aplicación con 5 componentes, pero imaginemos que sean más?

**La Salvación: Context (o Contexto) surge para solucionar este problema, y lo que hace es:
 - toma el dato de nuestro valor original en A y lo que hace que en lugar que esta info se tenga que estar guardando y pasando por cada componente, pues lo saca del arbol de componentes. 
 - luego lo guarda en un lugar aislado (separado)
 - luego todos los componentes tendrían acceso a esta información

Lo haremos, pero antes dejaremos el código limpio, eliminando el dato que se le pasaba y la props de cada componente. O sea, que, vamos a borrar tooodo este prop drilling que acabamos de hacer.
Quedando así:
```js
import React from 'react'
import CompB from './CompB'

function CompA() {
 return (
    <section id='compA'>
      <h2>&lt;Componente A /&gt;</h2>
      <CompB />
    </section>
  )
}

export default CompA
```
.
.
.

Componente E
```js
import React from 'react'

function CompE() {
  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: </h3>
    </section>
  )
}

export default CompE
```
Crearemos el Contexto...