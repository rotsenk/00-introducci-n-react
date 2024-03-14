import React from 'react' //eliminamos useContext
import CompC from './CompC'
import { useDataContext } from '../contexts/dataContext';
//import { DataContext } from '../contexts/dataContext'

function CompB() {
  //ejecutamos nuestro custom hook
  const { contextData } = useDataContext();//este es mucho más conveniente porque resulta más práctico más legible
  return (
    <section id='compB'>
      <h2>&lt;Componente B /&gt;</h2>
      <h3>Datos: { contextData }</h3>
      <CompC />
    </section>
  )
}

export default CompB