const { Router } = require("express");
const users = require("./usersModule.router");
const company = require("./companies.router");
const products = require("./products.router.js");

module.exports = () => {
  const app = Router();
  users(app);
  company(app);
  products(app);

  return app;
};
