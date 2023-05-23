const { Router } = require("express");
const route = Router(); 
const {
  createUser,
  findUser,
  deleteUser,
  editUser,
  filterUser
} = require("../lib/products/prueba.controller");

module.exports = (app) => {
  //define Route users
  app.use("/prueba", route);
  /**
   * @swagger
   * /productsModule/creation:
   *   post:
   *     summary: Crear Un nuevo Producto
   *     description: Recibe el body con los datos de creacion.
   *     tags:
   *       - Products
   *     responses:
   *       '200':
   *         description: Producto creado correctamente.
   */
  route.post("/", createUser); 
  /**
   * @swagger
   * /productsModule/find:
   *   get:
   *     summary: Obtiene los productos
   *     description: Obtiene los productos disponibles.
   *     tags:
   *       - Products
   *     responses:
   *       '200':
   *         description: Productos encontrados correctamente.
   */
  route.get("/", findUser);
  /**
   * @swagger
   * /productsModule/find:
   *   get:
   *     summary: Obtiene los productos
   *     description: Obtiene los productos disponibles.
   *     tags:
   *       - Products
   *     responses:
   *       '200':
   *         description: Productos encontrados correctamente.
   */
  route.get("/find", filterUser);
  /**
   * @swagger
   * /productsModule/delete:
   *   post:
   *     summary: Crear Un nuevo Producto
   *     description: Elimina el producto
   *       - Products
   *     responses:
   *       '200':
   *         description: El producto fue eliminado correctamente.
   */
  route.delete("/", deleteUser);
  /**
   * @swagger
   * /productsModule/delete:
   *   post:
   *     summary: Crear Un nuevo Producto
   *     description: Elimina el producto
   *       - Products
   *     responses:
   *       '200':
   *         description: El producto fue eliminado correctamente.
   */
  route.post("/edit", editUser);
};
