import { productoServices } from "../services/productos-servicios.js";

const formUpdate = document.querySelector("[form-update]");

const obtenerInformacionProducto =  () => {
const url = new URL(window.location);
const id = url.searchParams.get("id");

  if (id == null) {
    window.location.href = "../add-remove-product.html"
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

  const imageURL = document.querySelector("[url-producto]").value
  const price = document.querySelector("[precio-producto]").value
  const name = document.querySelector("[nombre-producto]").value
  const description = document.querySelector("[descripcion-producto]").value
  productoServices.actualizarProducto(imageURL ,name , price , description, id)
});