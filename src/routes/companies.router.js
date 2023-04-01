const { Router } = require("express");
const route = Router();
const {
  createNewCompany,
  editCompany,
} = require("../lib/companies/companiesModule");

module.exports = (app) => {
  //define Route users
  app.use("/companiesmodule", route);
  /**
   * @swagger
   * tags:
   *   - Usuarios
   *   - Autenticación
   * /companiesmodule:
   *   get:
   *     summary: Obtener una lista de usuarios
   *     description: Devuelve una lista de todos los usuarios.
   *     tags:
   *       - Usuarios
   *     responses:
   *       200:
   *         description: OK
   * /login:
   *   post:
   *     summary: Iniciar sesión
   *     description: Iniciar sesión en la aplicación.
   *     tags:
   *       - Autenticación
   *     responses:
   *       200:
   *         description: OK
   */

  /**
   * @swagger
   * /api/v1/usersModule:
   *  get:
   *   description: get users in list with Id
   *  responses:
   *  200:
   *  description: Usuarios consultados Correctamente
   * 500:
   * description: Ocurrio un error inesperado
   *
   * Params: query options
   */

  route.post("/", createNewCompany);

  route.patch("/", editCompany);
};
