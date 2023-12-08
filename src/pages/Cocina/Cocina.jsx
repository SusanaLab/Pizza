import React, { useEffect, useState } from 'react';
import { getOrders, saveVentas, updateOrderStatus } from '../../lib/firestore';
import OrdenItem from './Orden';
import styles from './Orden.css';
import { db } from '../../secrets';  
const Cocina = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [activeButton, setActiveButton] = useState('nuevas');
  const [ordenesNuevas, setOrdenesNuevas] = useState([]);
  const [ordenesCompletadas, setOrdenesCompletadas] = useState([]);

  useEffect(() => {
    const unsubscribe = getOrders((orders) => {
      const ordenesOrdenadas = [...orders].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
      setOrdenes(ordenesOrdenadas);

      const nuevas = orders.filter((orden) => orden.estado === 'En Proceso');
      const completadas = orders.filter((orden) => orden.estado === 'Completada');

      setOrdenesNuevas(nuevas);
      setOrdenesCompletadas(completadas);
    });

    return () => unsubscribe();
  }, []);

  const handleCompletadaClick = (orderId) => {
    updateOrderStatus(orderId, 'Completada');
  };

  const formatearFecha = (fechaString) => {
    try {
      const opciones = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };

      const fecha = new Date(fechaString);

      if (isNaN(fecha.getTime())) {
        return 'Fecha inválida';
      }

      return new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
    } catch (error) {
      console.error('Error al formatear la fecha:', error);
      return 'Error al formatear la fecha';
    }
  };

  const currentDate = new Date();

  const enviarVentas = async () => {
    const totalPizzas = calcularTotalPizzas();
    const totalPizzasVendidas = calcularTotalPizzasVendidas();

    saveVentas( totalPizzasVendidas, totalPizzas, currentDate);

    await deleteAllDocumentsInCollection('ordenes');
  };

  const deleteAllDocumentsInCollection = async (collection) => {
    const batch = db.batch();

    try {
      const snapshot = await db.collection(collection).get();

      snapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      console.log('Documentos eliminados correctamente.');
    } catch (error) {
      console.error('Error al eliminar documentos:', error);
    }
  };

  const calcularTotalPizzas = () => {
    let totalPizzas = 0;

    ordenes.forEach((orden) => {
      orden.pizzas.forEach((pizza) => {
        totalPizzas += pizza.precio * pizza.contador;
      });
    });

    return totalPizzas;
  };

  const calcularTotalPizzasVendidas = () => {
    let totalPizzas = 0;

    ordenes.forEach((orden) => {
      orden.pizzas.forEach((pizza) => {
        totalPizzas += pizza.contador;
      });
    });

    return totalPizzas;
  };

  return (
    <div id='cocina'>
      <div id='orden-titulo'>
        <h2 id='titulo'>Órdenes en Cocina</h2>
        <p id='titulo'>Total de ventas: ${calcularTotalPizzas()}</p>
        <p id='titulo'>Total de  pizzas {calcularTotalPizzasVendidas()}</p>
        <button
          className={activeButton === 'nuevas' ? 'completadaButtonActive' : 'completadaButtonInactive'}
          onClick={() => {
            setOrdenes(ordenesNuevas);
            setActiveButton('nuevas');
          }}
        >
          Nuevas
        </button>
        <button
          className={activeButton === 'completadas' ? 'completadaButtonActive' : 'completadaButtonInactive'}
          onClick={() => {
            setOrdenes(ordenesCompletadas);
            setActiveButton('completadas');
          }}
        >
          Completadas
        </button>
        <button onClick={enviarVentas} className='completadaButtonActive'>
          Vaciar ordenes
        </button>
      </div>

      <ul id='ordenes'>
        {ordenes.map((orden) => (
          <OrdenItem
            key={orden.id} 
            formatearFecha={formatearFecha}
            handleCompletadaClick={handleCompletadaClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cocina;
