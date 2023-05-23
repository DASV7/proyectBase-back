const ModelProduct = require("../../models/products");
const modelUsers = require("../../models/prueba");

module.exports = {
  // async createProduct(params) {
  //   const product = new ModelProduct(params);
  //   const newCompany = await product.save();
  //   console.log(newCompany);
  //   return newCompany;
  // },

  // sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
  async createUser(params) {
    const user = new modelUsers(params);
    const newUser = await user.save();
    console.log(newUser);
    return newUser;
  },

  async findUser(params) {
    const values = await modelUsers.find(params);
    return values;
  },

  async filterUser(params) {
    const { busqueda } = params;
    const values = await modelUsers.find({
      $or: [{ name:{ $regex: busqueda, $options: 'i' } }, { id: busqueda }, { email: { $regex: busqueda, $options: 'i' } }],
    });
    const desestructurados = values.map(({ name, id, email }) => ({ name, id, email }));
    return desestructurados
  },  

  // deleteUser(params) {},
  async deleteUser(params) {
    return await ModelProduct.findOneAndDelete(params);
  },

  async editUser(params) {
    const _id = params._id;
    delete params._id;
    return await ModelProduct.findOneAndUpdate(
      { _id: _id },
      { $set: params },
      { new: true }
    );
  },
};
