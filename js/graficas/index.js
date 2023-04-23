const ctx = document.getElementById("myChart");
const alertDanger = document.getElementById("alertDanger");
const pMensaje = document.getElementById("pMensaje");
// https://ucamp-api.onrender.com/api/v1/scores

const obtenerCalificaciones = async () => {
  pMensaje.innerHTML = "Cargando grafica, espera un momento!";
  alertDanger.classList.remove("d-none");
  const resp = await fetch("https://ucamp-api.onrender.com/api/v1/scores");
  const json = await resp.json();
  // console.log(json);

  pintarGrafica(json.data);
};

const pintarGrafica = (calificacionesArray) => {
  const estudiantes = calificacionesArray.map(
    (estudiante) => estudiante.nombre
  );
  const calificaciones = calificacionesArray.map(
    (estudiante) => estudiante.calificacion
  );

  new Chart(ctx, {
    type: "bar", // line, pie, bar, radar, doughnut
    data: {
      labels: estudiantes, // eje x
      datasets: [
        {
          label: "Grafica de calificaciones",
          data: calificaciones, // eje y
          borderWidth: 1,
          backgroundColor: ["#ff6384", "#36a2eb", "yellow", "green"],
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

  pMensaje.innerHTML = "";
  alertDanger.classList.add("d-none");
};

window.addEventListener("load", obtenerCalificaciones);
