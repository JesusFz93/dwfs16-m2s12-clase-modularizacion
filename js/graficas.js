const ctx = document.getElementById("myChart");
// https://ucamp-api.onrender.com/api/v1/scores

const obtenerCalificaciones = async () => {
  const resp = await fetch("https://ucamp-api.onrender.com/api/v1/scores");
  const json = await resp.json();

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
};

window.addEventListener("load", obtenerCalificaciones);
