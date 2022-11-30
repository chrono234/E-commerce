//GET
const listaProductos = () => fetch(`http://localhost:3000/producto`).then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
  return fetch(`http://localhost:3000/perfil`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

const annadirProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
  }

  export const productoServices = {
    listaProductos,
    crearCliente,
    eliminarProducto,
    annadirProducto
  };





