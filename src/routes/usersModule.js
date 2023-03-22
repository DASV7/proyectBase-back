const { Router } = require('express');
const route = Router();
const { getUsersById } = require("../lib/usersModule/usersModule.controller")

module.exports = (app) => {
    //define Route users
    app.use("/usersModule", route)

    /**
     * * @swagger
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
    route.get('/', getUsersById);
}