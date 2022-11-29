//GET
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
  return fetch(`http://localhost:3000/producto`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

  export const productoServices = {
    listaProductos,
    crearCliente,
    eliminarCliente,
  };





