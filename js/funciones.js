import { promesa1 } from "./promesas.js";

const llamarUsuarios = async () => {
  try {
    const respuesta = await promesa1;
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

const saludar = () => {
  console.log("Hola mundo");
};

export { llamarUsuarios, saludar };
