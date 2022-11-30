import { productoServices } from "../services/productos-servicios.js";

const obtenerInformacionProducto = () =>{
    const url = new URL(window.location);
    const id  = url.searchParms.get("id");

    const urlProducto = document.querySelector("[url-producto]")
    const categoria = document.querySelector("[categoria-producto]")
    const nombreProducto = document.querySelector("[nombre-producto]")
    const descripcion = document.querySelector("[descripcion-producto]")

    productoServices.annadirProducto(id).then((producto) => {
      urlProducto.value = producto.imageURL;
      categoria.value = producto.categoria;
      nombreProducto.value = producto.name;
      descripcion.value = producto.descripcion;
      
    });
};

obtenerInformacionProducto()