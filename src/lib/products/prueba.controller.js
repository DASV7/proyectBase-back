const productService = require("./prueba.service");

module.exports = {
  createUser: async (req, res) => {
    try {
      const result = await productService.createUser(req.body);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: false, data: result });
    }
  },
  
  createNewProduct: async (req, res) => {
    try {
      const result = await productService.createProduct(req.body);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("Error tan sapo perro", error);
      res.status(500).json({ error: false, data: result });
    }
  },


  findUser: async (req, res) => {
    try {
      const result = await productService.findUser(req.query);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("Error tan sapo perro", error);
      res.status(500).json({ error: false, data: result });
    }
  },
  filterUser: async (req, res) => {
    try {
      const result = await productService.filterUser(req.query);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("Error tan sapo perro", error);
      res.status(500).json({ error: false, data: result });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const result = await productService.deleteUser(req.query);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("Error", error);
      res.status(500).json({ error: false, data: result });
    }
  },

  editUser: async (req, res) => {
    try {
      const result = await productService.editUser(req.body);
      res.status(200).json({ error: false, data: result });
    } catch (error) {
      console.log("Error", error);
      res.status(500).json({ error: false, data: result });
    }
  },
};
