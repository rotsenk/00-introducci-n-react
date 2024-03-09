import { useState } from 'react';//use significa que es un Hook, es una regla
import React from "react";
import PropTypes from "prop-types";



export const CounterApp = ({ value }) => {
 
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (event) => {
    //console.log(event);
    //mando a llamar la función
    setCounter( counter + 1 );
    //no podemos hacer counter++ porque nos daría un error al querer acumular
  };


  return (
    <>
      <h1>CounterApp</h1>
      <h3> { counter } </h3>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
