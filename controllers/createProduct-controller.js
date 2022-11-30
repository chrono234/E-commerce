import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector("[form-new-product]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const imageURL = document.querySelector("[url-producto]").value
  const price = document.querySelector("[categoria-producto]").value
  const name = document.querySelector("[nombre-producto]").value
  const description = document.querySelector("[descripcion-producto]").value

  productoServices.crearProducto(imageURL, price, name, description).then(() => {
    window.location.href = "https://chrono234.github.io/E-commerce/add-remove-product.html";
    }).catch((err) => alert("hubo un error"));
});