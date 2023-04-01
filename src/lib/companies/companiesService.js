const modelCompany = require("../../models/company");

module.exports = {
  async createCompany(params) {
    const companyToCreate = params;
    const company = new modelCompany(companyToCreate);
    const newCompany = await company.save();
    console.log(newCompany);
    return newCompany;
  },
  editCompany(params) {},
  deleteCompany(params) {},
};
