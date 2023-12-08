import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Administrador.module.css';

const Administrador = () => {
  return (
    <div  className={styles.contenedor}>
      <h1  className={styles.titulo}>Hola, Bienvenido al sistema</h1>
      <div className={styles.sistema}>
        <div className={styles.item}><Link to="/ventas"><h1>Ventas</h1></Link></div>
        <div  className={styles.item}><Link to="/menu"><h1>Menu</h1></Link></div>
        <div  className={styles.item}><Link to="/mesera"><h1>Mesero</h1></Link></div>
        <div  className={styles.item}><Link to="/cocina"><h1>Cocina</h1></Link></div>
        <div  className={styles.item}><Link to="/"><h1>Home</h1></Link></div>
      </div>
    </div>
  );
};

export default Administrador;
