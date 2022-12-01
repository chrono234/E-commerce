import { productoServices } from "../services/productos-servicios.js";

const formUpdate = document.querySelector("[form-update]")

const obtenerInformacionProducto = async () => {
const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id == null) {
      // window.location.href = "/screens/error.html"
}
const urlProducto = document.querySelector("[url-producto]");
const categoria = document.querySelector("[categoria-producto]");
const nombreProducto = document.querySelector("[nombre-producto]");
const descripcion = document.querySelector("[descripcion-producto]");

try{
    const perfil = await productoServices.actualizarProducto(id);

    if (perfil.nombreProducto && perfil.email) {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
    }else{
    throw new Error();
    }
}catch(error){
    // window.location.href = "/screens/error.html";
    console.log(error);
}


}

obtenerInformacionProducto()

formUpdate.addEventListener("submit", (evento) => {
evento.preventDefault();
const url = new URL(window.location);
const id = url.searchParams.get("id");
const urlProducto = document.querySelector("[url-producto]").value
const categoria = document.querySelector("[categoria-producto]").value
const nombreProducto = document.querySelector("[nombre-producto]").value
const descripcion = document.querySelector("[descripcion-producto]").value
productoServices.actualizarCliente(urlProducto,categoria,nombreProducto,descripcion).then(() => {
    window.location.href = "/screens/edicion_concluida.html"
})
});
