import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export function DataContextProvider(props) {
  const [ contextData, setContextData] = useState(20);

  const valor = { contextData, setContextData };

  return (
    <DataContext.Provider value={valor}>
        {props.children}
    </DataContext.Provider>
  );
}

//exportamos esta nueva función
export function useDataContext(){
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useDataContext debe ser usado dentro de un Proveedor')
    }
    return context;
}