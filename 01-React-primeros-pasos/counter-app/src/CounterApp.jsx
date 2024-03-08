import React from "react";
import PropTypes from "prop-types";

//es preferíble usar una función de flecha
//si esta fucnión no tiene ninguna interacción con el functional component
//se recomienda dejarla fuera
const handleAdd = (event) => {
  console.log(event);
};

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h3> {value} </h3>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
