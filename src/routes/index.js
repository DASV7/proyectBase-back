const { Router } = require("express");
const users = require("./usersModule.router");
const company = require("./companies.router");

module.exports = () => {
  const app = Router();
  users(app);
  company(app);

  return app;
};
