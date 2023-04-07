const { getCountry } = require("../controllers/country.controller");

const getCountryHandler = (req, res) => {
  getCountry(req, res);
};

const getCountryIdHandler = (req, res) => {};

const getCountryNameHandler = (req, res) => {};

module.exports = {
  getCountryHandler,
  getCountryIdHandler,
  getCountryNameHandler,
};
