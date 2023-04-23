const inputNombre = document.getElementById("inputNombre");
const inputCalificacion = document.getElementById("inputCalificacion");
const ctx = document.getElementById("myChart");
const selectGrafica = document.getElementById("selectGrafica");
const cuerpoTabla = document.getElementById("cuerpoTabla");

let myChart;
let calificacionesArray = [];

const obtenerCalificaciones = async () => {
  try {
    const resp = await fetch("https://ucamp-api.onrender.com/api/v1/scores");
    const data = await resp.json();

    calificacionesArray = data.data;
    pintarGrafica(calificacionesArray);
    pintarTabla(calificacionesArray);
  } catch (error) {
    console.log(error);
  }
};

const agregarCalificacion = async () => {
  const calificacionGuardar = {
    nombre: inputNombre.value,
    calificacion: inputCalificacion.value,
  };

  const resp = await fetch("https://ucamp-api.onrender.com/api/v1/scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(calificacionGuardar),
  });
  const data = await resp.json();
  calificacionesArray.push(data.data);
  pintarGrafica(calificacionesArray);
  pintarTabla(calificacionesArray);
};

const pintarGrafica = (calificacionesArray) => {
  const calificaciones = calificacionesArray?.map((post) => post.calificacion);
  const usuarios = calificacionesArray?.map((post) => post.nombre);

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: selectGrafica.value,
    data: {
      labels: usuarios,
      datasets: [
        {
          label: "Calificaciones",
          data: calificaciones,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const pintarTabla = (calificacionesArray) => {
  cuerpoTabla.innerHTML = "";
  calificacionesArray?.forEach((calificacion) => {
    cuerpoTabla.innerHTML += `
      <tr>
        <td>${calificacion.nombre}</td>
        <td>${calificacion.calificacion}</td>
      </tr>
    `;
  });
};

pintarGrafica();
pintarTabla();

window.addEventListener("load", obtenerCalificaciones);
