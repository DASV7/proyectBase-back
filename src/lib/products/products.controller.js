const productService = require("./products.service");
const products = (module.exports = {});

products.createNewProduct = async (req, res) => {
  try {
    const result = await productService.createProduct(req.body);
    res.status(200).json({ error: false, data: result });
  } catch (error) {
    console.log("Error tan sapo perro", error);
    res.status(500).json({ error: false, data: result });
  }
};

products.findProducts = async (req, res) => {
  try {
    const result = await productService.findProducts(req.query);
    res.status(200).json({ error: false, data: result });
  } catch (error) {
    console.log("Error tan sapo perro", error);
    res.status(500).json({ error: false, data: result });
  }
};
