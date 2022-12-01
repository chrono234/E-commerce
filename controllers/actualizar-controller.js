import { productoServices } from "../services/productos-servicios.js";

const formUpdate = document.querySelector("[form-update]");

const obtenerInformacionProducto = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id == null) {
    // window.location.href = "/screens/error.html"
  }
  const precio = document.querySelector("[precio-producto]");
  const nombreProducto = document.querySelector("[nombre-producto]");

  try {
    const perfil = await productoServices.actualizarProducto(id);

    if (perfil.nombreProducto && perfil.email) {
      nombre.value = perfil.nombre;
      email.value = perfil.email;
    } else {
      throw new Error();
    }
  } catch (error) {
    // window.location.href = "/screens/error.html";
    console.log(error);
  }
};

obtenerInformacionProducto();

formUpdate.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const precio = document.querySelector("[precio-producto]").value;
  const nombreProducto = document.querySelector("[nombre-producto]").value;
  productoServices
    .actualizarCliente(precio, nombreProducto, descripcion)
    .then(() => {
      window.location.href = "/screens/edicion_concluida.html";
    });
});
