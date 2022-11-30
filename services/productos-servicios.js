//GET
const listaProductos = () => fetch(`http://localhost:3000/producto`).then((respuesta) => respuesta.json());


const crearCliente = (email,password) => {
  return fetch(`http://localhost:3000/perfil`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, id: uuid.v4() }),
  });
};

const crearProducto = (imageURL, price, name, description) => {
  return fetch(`http://localhost:3000/producto`, {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageURL, price, name, description }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};

  const actualizarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
  }

// annadirProducto,
  export const productoServices = {
    listaProductos,
    crearCliente,
    crearProducto,
    eliminarProducto
  };
  
  



