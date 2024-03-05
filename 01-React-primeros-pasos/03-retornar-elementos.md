## Retornar elementos en el componente - fragment
```js
//está claro que para mantener dos o más elementos html 
//en nuestro componente, necesitamos tener un nodo padre
//antes era el div, pero eso generaba ciertos cambios en el diseño
//y le pedíamos a react trabajar por nada
//luego, eso lo cambiaron por fragment, pero para usarlo
//había que importar Fragment, y también era un lío
//así que para ahorrarnos eso, se pensó en <> </> que es equivalente 
//a tener <Fragment> </Fragment>

export const FirstApp = () => {
  return (
    <>
      <h1>Hello First App!!!!!!</h1>
      <p>Soy un párrafo</p>
    </>
  );
}
```
Regla de react: siempre tener un nodo padre

## Impresión de variables en html
```js
/**qué cosas podemos imprimir? o cómo hacemos para imprimir algo?
 * digamos tenemos una variable por algún lado, cómo hago para imprimirla aquí?
 * lo haremos con una expresión {} permitida, que no sea un obj
 */
export const FirstApp = () => {
  return (
    <>
      <h1>{ 1 + 1 }</h1>
      <p>Soy un párrafo</p>
    </>
  );
}
```
Qué pasaría con estas opciones:
```js

const newMessage = 'Nestor';
//qué pasa si tengo un número? 
//const newMessage = 123;
//un valor booleano?
//const newMessage = true;
//qué pasa si tengo un arreglo?
//const newMessage = [1,2,3,4,5,6,7,8,9];

export const FirstApp = () => {
  return (
    <>
      <h1>{ newMessage }</h1>
      <p>Soy un párrafo</p>
    </>
  );
}
```

pero por qué se dice que No un objeto?:
```js

const newMessage = {
  message: 'Hola Mundo',
  title: 'Nestor'
}

//esto me daría errores en la consola, diciendo que no es valido
//como un ReactChild 
export const FirstApp = () => {
  return (
    <>
      <h1>{ newMessage }</h1>
      <p>Soy un párrafo</p>
    </>
  );
}

//lo que sí podríamos es entrar a las propiedades con la 
//notación de punto, pero no imprimir el objeto

export const FirstApp = () => {
  return (
    <>
      <h1>{ newMessage.message }</h1>
      <p>Soy un párrafo</p>
    </>
  );
}
```
Pero, qué tal que necesitamos sí o sí imprimir el arreglo?
podríamos hacer lo siguiente:
```js

const newMessage = {
  message: 'Hola Mundo',
  title: 'Nestor'
}

export const FirstApp = () => {
  return (
    <>
      <code>{ JSON.stringify(newMessage) }</code>
      <p>Soy un párrafo</p>
    </>
  );
}
```

Practicando...
```js

//se recomienda dejar fuera del scope
//porque cuando react recargue va a tener que redibujar 
//lo que estamos asignando a esa función
//y cargar nuevamente si está dentro

//pero hay cosas específicas que sí vamos a dejar dentro
//las cosas que tienen dependencia de los procesos internos
//ejemplo un botón

const getResult = () => {
  return 4 + 5;
} 

//si fuera async no funcionaría, porque básicamente es un obj

export const FirstApp = () => {
  return (
    <>
      <h1>{ getResult() }</h1>
      <p>Soy un párrafo</p>
    </>
  );
}
```