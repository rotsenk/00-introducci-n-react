import React, { useEffect, useState } from "react";

function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  //useEffect para suscribirnos a los eventos globales de conexión
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return [isOnline, setIsOnline];
}

function EstadoRed() {
  const [isOnline, setIsOnline] = useState(true); // Agrega esta línea

  const handleDesconectar = () => {
    setIsOnline((prevIsOnline) => !prevIsOnline); // Cambia el estado al valor opuesto
  };

  return (
    <>
      <h1>{ isOnline ? '✅ En línea.' : '❌ Desconectado.' }</h1>
      <button onClick={handleDesconectar}>{isOnline ? "🔴" : "🟢"}</button>
    </>
  );
}

export default EstadoRed;
