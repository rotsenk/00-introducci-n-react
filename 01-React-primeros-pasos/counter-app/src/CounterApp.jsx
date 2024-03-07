import React from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h3>{value}</h3>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
