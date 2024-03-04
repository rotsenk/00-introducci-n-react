## Introducción y Conceptos Generales de React

¿Qué aprenderemos en esta sección?
- ¿Qué es React?
  Es una librería que nos permite crear apps, es declarativa y sigue patrones de diseños, eficiente y predecible que trabaja con componentes.

- Conceptos generales
- Babel
  Es algo que funciona en el bg cuando creamos nuestras aplicaciones de React, nos permite utilizar características actuales de JS, inclusive en navegadores web que aún no soportan esa característica
- JSX

Daremos nuestros primeros pasos y una pequeña aplicación que nos ayudará a perderle el miedo a React rápidamente

## Index:
> https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b

- en el index.html, creamos un script, donde haremos la pequeña app:
```html
<body>

    <script type="text/babel">

        const h1Tag = <h1> Hello World! </h1>;

    </script>

</body>
```
pero necesitamos decirle en dónde queremos renderizar esto, y vamos a crear el espacio destinado:
```html
<body>

    <!-- Aquí se va a renderizar -->
    <div id="root">

    </div>

    <script type="text/babel">
        //necesitamos referenciar
        const divRoot = document.querySelector('#root');

        const h1Tag = <h1> Hello World! </h1>;

        ///necesito decirle donde renderizar el h1Tag
        ReacDOM.render(h1Tag, divRoot);

    </script>

</body><body>

    <!-- Aquí se va a renderizar -->
    <div id="root">

    </div>

    <script type="text/babel">
        //necesitamos referenciar
        const divRoot = document.querySelector('#root');

        const h1Tag = <h1> Hello World! </h1>;

        ///necesito decirle donde renderizar el h1Tag
        ReactDOM.render(h1Tag, divRoot);

    </script>

</body>
```
hágamos algo divertido, coloquemos una constante con un nombre, por ejemplo "Cosmo"
```html
<body>

    <div id="root">

    </div>

    <script type="text/babel">

        const divRoot = document.querySelector('#root');

        //crear la constante nombre
        const nombre = 'Cosmo';
        const h1Tag = <h1> Hola, soy {nombre} </h1>;

        ReactDOM.render(h1Tag, divRoot);

    </script>

</body>
```