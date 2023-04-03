const companyServices = require("./companiesService");
const company = (module.exports = {});

company.createNewCompany = async (req, res) => {
  try {
    const result = await companyServices.createCompany(req.body);
    res.status(200).json({ error: false, data: result });
  } catch (error) {
    console.log("Error tan sapo perro", error);
    res.status(500).json({ error: false, data: result });
  }
};

company.editCompany = async (req, res) => {
  const usuario = await modelCompany.updateOne(
    { _id: "641e33f6aecd819ba4affc8c" },
    { $set: { surname: "emaunel" } }
  );
  console.log(JSON.parse(JSON.stringify(usuario)));
};

company.deleteCompany = async (req, res) => {
  //Como buscar un usuario
  const findUser = await modelCompany.findOne({
    _id: "641e33f6aecd819ba4affc8c",
  });
  console.log(JSON.parse(JSON.stringify(findUser)));
};

company.findCompanys = async (req, res) => {
  const findUser = await modelCompany.findOne({
    _id: "641e33f6aecd819ba4affc8c",
  });
  console.log(JSON.parse(JSON.stringify(findUser)));
};
