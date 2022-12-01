import { productoServices } from "../services/productos-servicios.js";

const formUpdate = document.querySelector("[form-update]");

const obtenerInformacionProducto =  () => {
const url = new URL(window.location);
const id = url.searchParams.get("id");

  if (id == null) {
    alert("upps hubo un error")
  }

  const imageURL = document.querySelector("[url-producto]");
  const price = document.querySelector("[precio-producto]");
  const name = document.querySelector("[nombre-producto]");
  const description = document.querySelector("[descripcion-producto]");

  productoServices.detalleProducto(id).then((producto) => {
    imageURL.value = producto.imageURL
    price.value = producto.price
    name.value = producto.name
    description.value = producto.description
  });
};

obtenerInformacionProducto();

formUpdate.addEventListener("submit", (evento) => {
  evento.preventDefault()
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imageURL = document.querySelector("[url-producto]");
  const price = document.querySelector("[precio-producto]");
  const name = document.querySelector("[nombre-producto]");
  const description = document.querySelector("[descripcion-producto]");
  productoServices.actualizarProducto(imageURL ,name , price , description, id)
});