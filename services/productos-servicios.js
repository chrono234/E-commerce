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

  const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
  };

  const actualizarProducto = (imageURL ,name, price, descripcion, id ) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify({imageURL, name, price, descripcion})
    })
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
  };

  export const productoServices = {
    listaProductos,
    crearCliente,
    crearProducto,
    detalleProducto,
    actualizarProducto,
    eliminarProducto,
    actualizarProducto
  };
  
  



