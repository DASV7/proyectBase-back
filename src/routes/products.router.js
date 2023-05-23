// const { Router } = require("express");
// const route = Router();
// const { createNewProduct,findProducts ,deleteProduct, editProduct } = require("../lib/products/products.controller");

// module.exports = (app) => {

//   //define Route users
//   app.use("/productsModule", route);
//   /**
//    * @swagger
//    * /productsModule/creation:
//    *   post:
//    *     summary: Crear Un nuevo Producto
//    *     description: Recibe el body con los datos de creacion.
//    *     tags:
//    *       - Products
//    *     responses:
//    *       '200':
//    *         description: Producto creado correctamente.
//    */
//   route.post("/", createNewProduct);
//   /**
//    * @swagger
//    * /productsModule/find:
//    *   get:
//    *     summary: Obtiene los productos
//    *     description: Obtiene los productos disponibles.
//    *     tags:
//    *       - Products
//    *     responses:
//    *       '200':
//    *         description: Productos encontrados correctamente.
//    */
//   route.get("/", findProducts);
//   /**
//    * @swagger
//    * /productsModule/delete:
//    *   post:
//    *     summary: Crear Un nuevo Producto
//    *     description: Elimina el producto 
//    *       - Products
//    *     responses:
//    *       '200':
//    *         description: El producto fue eliminado correctamente.
//    */
//   route.delete("/", deleteProduct); 
//    /**
//    * @swagger
//    * /productsModule/delete:
//    *   post:
//    *     summary: Crear Un nuevo Producto
//    *     description: Elimina el producto 
//    *       - Products
//    *     responses:
//    *       '200':
//    *         description: El producto fue eliminado correctamente.
//    */
//    route.post("/edit", editProduct); 
// };
