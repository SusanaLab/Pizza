import { db, fb } from '../../src/secrets.js';
export const save = ( estado, cliente,Especificaciones, fecha, mesera, pizzas, total ) => 
  db.collection("ordenes").doc().set({
    estado,
 cliente,
    Especificaciones,
    fecha,
    mesera,
    pizzas,
    total,
});
export const saveVentas = ( totalCantidad, totalDinero, fecha) => 
  db.collection("ventas").doc().set({
 totalCantidad,
 totalDinero,
 fecha
});


export const getOrders = (callback) => {
  const unsubscribe = db.collection('ordenes').onSnapshot((snapshot) => {
    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(orders);
  });

  return unsubscribe;
};
export const getVentas = (callback) => {
  const unsubscribe = db.collection('ventas').onSnapshot((snapshot) => {
    const vendidas = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(vendidas);
  });

  return unsubscribe;
};



export const updateOrderStatus = (orderId, newStatus) => {
  return db.collection('ordenes').doc(orderId).update({
    estado: newStatus,
  });
};
export const deleteNote = (id) => db.collection('ventas').delete();