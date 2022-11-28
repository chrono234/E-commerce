import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (name, price, imageURL, ver_producto) => {
  const card = document.createElement("div");
  const contenido = 
  `
    <div class = "product__information" >
      <img class="product__image" src="${imageURL}" alt="imagen de producto">
      <div>
        <h3 class="tag">${name}</h3>
        <p class="price">${price}</p>
        <p class="open__product">${ver_producto}</p>
      </div>
    </div>
  `
  card.innerHTML = contenido;
  card.classList.add("card");
  return card;
};

const producto = document.querySelector("[datos-productos]");
const consola = document.querySelector("[datos-consola]");
const diversos = document.querySelector("[datos-diversos]");

const render = async() =>{
  try{
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach(elemento => {
      producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageURL, elemento.ver_producto));
    });
  }
  catch(error){
    console.log(error);
  };
};

render()
