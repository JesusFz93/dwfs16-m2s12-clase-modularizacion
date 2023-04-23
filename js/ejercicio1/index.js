import { obtenerUsuarios, buscarPorNombre } from "./events.js";

const btnBuscarTodos = document.getElementById("btnBuscarTodos");
const btnBuscarPorNombre = document.getElementById("btnBuscarPorNombre");

btnBuscarTodos.addEventListener("click", obtenerUsuarios);
btnBuscarPorNombre.addEventListener("click", buscarPorNombre);
