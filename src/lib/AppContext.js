import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [orden, setOrden] = useState([]);
  const [cliente, setCliente] = useState('');
  const [especific, setEspecific] = useState('');
  const [precio, setPrecio] = useState(0);
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
    const [orderDateTime, setOrderDateTime] = useState('');
  const [waitressName, setWaitressName] = useState('ximena');
  return (
    <AppContext.Provider value={{ orderDateTime, setOrderDateTime, waitressName, setWaitressName, orden, setOrden, cliente, setCliente, especific, setEspecific,precio, setPrecio, contador, setContador, nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
