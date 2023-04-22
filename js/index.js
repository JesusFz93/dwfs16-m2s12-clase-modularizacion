import { llamarUsuarios, saludar } from "./funciones.js";
import frutas from "./data.js";
console.log(frutas);

const btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", saludar);
window.addEventListener("load", llamarUsuarios);
