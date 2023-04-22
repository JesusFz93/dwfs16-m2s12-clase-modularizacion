const promesa1 = new Promise((resolve, reject) => {
  const usuarios = [
    {
      id: 1,
      nombre: "Jesus",
      activo: false,
    },
    {
      id: 2,
      nombre: "Melissa",
      activo: true,
    },
  ];

  if (usuarios.length > 0) {
    const resp = {
      usuarios,
      msg: "Usuarios obtenidos",
    };

    resolve(resp);
  } else {
    const resp = {
      usuarios,
      msg: "No existen usuarios",
    };

    reject(resp);
  }
});

export { promesa1 };
