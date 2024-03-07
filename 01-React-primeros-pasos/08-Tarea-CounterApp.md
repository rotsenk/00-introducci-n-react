## Se dejó una tarea
- Tarea: https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757

```js
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
```

se verá así el `main.jsx`
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
//import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 1011 } />
    </React.StrictMode>
);
```