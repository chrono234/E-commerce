import { productoServices } from "../services/productos-servicios.js";

const nuevoProducto = (name, price, imageURL, id) => {
  console.log(id);
  const card = document.createElement("div");
  const contenido = 
  `
    <div class = "product__information">
      <img class="product__image" src="${imageURL}" alt="imagen de producto">
      <div class="icon-container"></div>
      <div>
        <button class="button__delete" type="button" id ="${id}"></button>
        <a href="../actualizar-producto.html?id=${id}" target="_blank" rel="noopener noreferrer"><button class="button__edit" type="button"></button></a>
        <a href="${imageURL}" target ="_blank"><h3 class="tag">${name}</h3></a>
        <p class="price">${price}</p>
        <p class="open__product">${id}</p>
      </div>
    </div>
  `
  card.innerHTML = contenido;
  card.classList.add("card");
  const btn = card.querySelector("button");
  btn.addEventListener('click', () => {
    const id = btn.id;
    productoServices.eliminarProducto(id).then(respuesta =>{
      console.log(respuesta);
    }).catch(err => alert("Ocurrio un error"))
  })
  return card;
};

const producto = document.querySelector("[datos-producto]");

productoServices.listaProductos().then((data) => {
    data.forEach(({name, price, imageURL, id}) => {
      const nuevaLinea = nuevoProducto(name, price, imageURL, id);
      producto.appendChild(nuevaLinea);
    });
  }).catch((error) => console.log(error));
