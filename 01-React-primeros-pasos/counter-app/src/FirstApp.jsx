
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

