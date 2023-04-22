import { llamarUsuarios, saludar } from "./funciones.js";
import frutas from "./data.js";

const btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", saludar);
console.log(frutas);

window.addEventListener("load", llamarUsuarios);
