'use strict';

// Endpoint: /login
module.exports.login = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: "Autenticación serverless simulada con éxito",
      token: "xyz123tokenServerlessFelipe"
    }),
  };
};

// Endpoint: /users
module.exports.getUsers = async (event) => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: "Lista de usuarios obtenida correctamente",
      users: [
        { id: 1, usuario: "admin", rol: "profesor" },
        { id: 2, usuario: "felipe", rol: "alumno" }
      ]
    }),
  };
};
