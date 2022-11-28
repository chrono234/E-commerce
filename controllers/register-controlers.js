import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;
  productoServices.crearCliente(email, password).then((respuesta) => {
    console.log(respuesta);
    }).catch((err) => console.log(err));
});
