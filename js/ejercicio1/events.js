import { promesa1 } from "./promesas.js";
const inputUser = document.getElementById("inputUser");
const alertDanger = document.getElementById("alertDanger");
const pMensaje = document.getElementById("pMensaje");

const obtenerUsuarios = async () => {
  try {
    const resp = await promesa1;
    pintarTabla(resp.users);
    alertDanger.classList.add("d-none");
  } catch (error) {
    console.log(error);
    pMensaje.innerHTML = error.msg;
    alertDanger.classList.remove("d-none");
  }
};

const buscarPorNombre = async () => {
  try {
    let resp = await promesa1;
    const user = resp.users.find((user) => user.name === inputUser.value);

    if (user) {
      if (!user.phone) {
        resp = {
          user,
          msg: "No tiene numero de telefono",
        };
        pintarTabla([resp.user]);
        pMensaje.innerHTML = resp.msg;
        alertDanger.classList.remove("d-none");
      } else {
        resp = {
          user,
          msg: "Usuario encontrado",
        };
        pintarTabla([resp.user]);
        pMensaje.innerHTML = "";
        alertDanger.classList.add("d-none");
      }
    } else {
      resp = {
        user: {},
        msg: "Usuario no encontrado",
      };
      pintarTabla([]);
      pMensaje.innerHTML = resp.msg;
      alertDanger.classList.remove("d-none");
    }

    inputUser.value = "";
  } catch (error) {
    console.log(error);
    inputUser.value = "";
  }
};

const pintarTabla = (users) => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  users.forEach((user) => {
    tbody.innerHTML += `<tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.age || ""}</td>
      <td>${user.phone || ""}</td>
    </tr>`;
  });
};

export { obtenerUsuarios, buscarPorNombre };
