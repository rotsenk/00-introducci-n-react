import React, { useContext } from 'react'
import { DataContext } from '../contexts/dataContext'

function CompE() {

  const { contextData, setContextData } = useContext(DataContext);

  return (
    <section id='compE'>
      <h2>&lt;Componente E /&gt;</h2>
      <h3>Dato: { contextData } </h3>
      <button 
        onClick={() => setContextData 
            ( contextData + 1)
        } > 
        Sumar 1
      </button>
    </section>
  )
}

export default CompE