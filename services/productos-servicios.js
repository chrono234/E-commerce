const listaProductos = () => fetch(`http://localhost:3000/producto`).then((respuesta) => respuesta.json());

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

  const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
  };

  const actualizarProducto = (imageURL ,name, price, description, id ) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({imageURL, name, price, description})
    })
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
  };

  export const productoServices = {
    listaProductos,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto,
  };
  
  



