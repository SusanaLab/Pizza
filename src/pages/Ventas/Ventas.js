import React, { useEffect, useState } from 'react';
import { getVentas } from '../../lib/firestore';
import { Bar } from 'react-chartjs-2';
import styles from './Ventas.module.css';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const unsubscribe = getVentas((vendidas) => {
      setVentas(vendidas);
    });

    return () => unsubscribe();
  }, []);




  return (
    <>
      <div className={styles.ventas}>
        <h2>Registro de Ventas</h2>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Total Dinero</th>
                <th>Total Pizzas</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>${venta.totalDinero}</td>
                  <td>{venta.totalCantidad}</td>
                  <td>{venta.fecha.toDate().toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Ventas;
