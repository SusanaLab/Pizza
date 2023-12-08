// OrdenItem.jsx
import React from 'react';
import styles from './Orden.css'

const OrdenItem = ({ orden, formatearFecha, handleCompletadaClick }) => (
    <div className="orden-item">
        <p className="estado">{orden.estado}</p>
        <p className="fecha">{formatearFecha(orden.fecha)}</p>

        <p className="cliente"> {orden.cliente}</p>


        <p className="mesera">Mesera: {orden.mesera}</p>

        <ul className="pizzas-list">
            {orden.pizzas.map((pizza, index) => (
                <li key={index} className="pizza-item">
                    <div><p>{pizza.contador} {pizza.nombre} ${pizza.precio}</p></div>
                </li>
            ))}
        </ul> 
        <p className="especificaciones"> {orden.Especificaciones}</p>
        <p className="total">Total: ${orden.total}</p>
       
        {orden.estado !== 'Completada' && (
            <button className="completada-button" onClick={() => handleCompletadaClick(orden.id)}>
                Completada
            </button>
        )}
    </div>

);

export default OrdenItem;
