import React, { useState } from 'react';
import PizzaButton from './PizzaButton';
import styles from './Mesero.module.css';
import data from '../../Data/data';
import { useAppContext } from '../../lib/AppContext';
import { save } from '../../lib/firestore';

const pizzas = data.pizza;

const Mesero = () => {
  const { orderDateTime, setOrderDateTime, waitressName, setWaitressName, cliente, setCliente, especific, setEspecific, precio, setPrecio, nombre, setNombre, contador, setContador, orden, setOrden } = useAppContext();
  const [ordenCount, setOrdenCount] = useState(0);

  const handleInputCorreo = e => {
    setCliente(e.target.value);
  };

  const handleInputEspecific = e => {
    setEspecific(e.target.value);
  };
  const handleOrderDateTimeChange = (e) => {
    setOrderDateTime(e.target.value);
  };

  const handleWaitressNameChange = (e) => {
    setWaitressName(e.target.value);
  };
  const status = 'En Proceso';
  const enviarOrden = () => {
    const orderData = {

      status,
      cliente,
      especific,
      orderDateTime,
      waitressName,
      pizzas: orden,
      total: orden.reduce((acc, item) => acc + item.precio * item.contador, 0)
    };


    // Suponiendo que save espera 6 argumentos
    save(status, orderData.cliente, orderData.especific, orderData.orderDateTime, orderData.waitressName, orderData.pizzas, orderData.total);
    console.log(orderData.cliente, orderData.especific, orderData.orderDateTime, orderData.waitressName, orderData.pizzas, orderData.total);
    setCliente('');
    setEspecific('');
    setOrderDateTime('');
    setWaitressName('');
    setOrden([]);

  };


  const agregarPizzaOrden = () => {
    const nuevaOrden = [...orden, { nombre, contador, precio }];
    setOrden(nuevaOrden);

    setNombre('');
    setContador(0);
    setPrecio(0);
    console.log(nombre, contador, precio);
  };

  const eliminarPizzaOrden = index => {
    const nuevaOrden = [...orden];
    nuevaOrden.splice(index, 1);
    setOrden(nuevaOrden);
  };

  const editarPizzaOrden = (index, nuevaCantidad) => {
    const nuevaOrden = [...orden];
    nuevaOrden[index].contador = nuevaCantidad;
    setOrden(nuevaOrden);
  };


  return (

    <div className={styles.flavorDiv}>
      <div className={styles.menuFlavor}>
        <h1 className={styles.pizza}>Pizza</h1>
        <p>Selecciona un sabor y da click en agregar</p>
        <div className={styles.flavor}>
          {pizzas.map(pizza => (
            <PizzaButton
              key={pizza.id}
              price={pizza.price}
              pizza={pizza.name}
              setPrecio={setPrecio}
              setNombre={setNombre}
              setContador={setContador}

            />
          ))}
        </div>
        <button className={styles.addButton} onClick={agregarPizzaOrden}>Agregar</button>
      </div>

      <div className={styles.orden}>
        <h2>Orden</h2>
        <label htmlFor="username">Nombre de cliente</label>
        <input
          type="text"
          id="username"
          name="username"
          value={cliente}
          onChange={handleInputCorreo}
        />
        <label htmlFor="pizzaSpecs">Especificaciones de la Pizza:</label>
        <textarea
          id="pizzaSpecs"
          name="pizzaSpecs"
          value={especific}
          onChange={handleInputEspecific}
        ></textarea>
        <label htmlFor="orderDateTime">Fecha y Hora de la Orden:</label>
        <input
          type="datetime-local"
          id="orderDateTime"
          name="orderDateTime"
          value={orderDateTime}
          onChange={handleOrderDateTimeChange}
        />
        <label htmlFor="waitressName">Nombre de la Mesera:</label>
        <select
          id="waitressName"
          name="waitressName"
          value={waitressName}
          onChange={handleWaitressNameChange}
        >
          <option value="ximena">Uno</option>
          <option value="erika">Dos</option>
          <option value="diana">Cocina</option>
        </select>
        <div>
          <ul>
            {orden.map((item, index) => (
              <li id='item-selected' key={index}>
                <div>
                  <p> {item.nombre} </p>
                  <input
                    id='contador'
                    type="number"
                    value={item.contador}
                    onChange={e => editarPizzaOrden(index, parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <p>Precio: ${item.precio * item.contador}</p>

                  <button onClick={() => eliminarPizzaOrden(index)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <p>Total: ${orden.reduce((acc, item) => acc + item.precio * item.contador, 0)}</p>
        </div>
        <button onClick={enviarOrden}>Enviar</button>
      </div>

    </div >

  );
};

export default Mesero;
