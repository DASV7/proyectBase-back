const ModelProduct = require("../../models/products");

module.exports = {
  async createProduct(params) {
    const product = new ModelProduct(params);
    const newCompany = await product.save();
    console.log(newCompany);
    return newCompany;
  },

  async findProducts() {
    const values = await ModelProduct.find({});
  //  await  ModelProduct.deleteMany({})
    return values;
  },

  editCompany(params) {},
  deleteCompany(params) {},
};
