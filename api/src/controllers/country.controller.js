const { Country, Activity } = require("../db");
const axios = require("axios");
const URL = "https://restcountries.com/v3/all";

const getCountry = async (req, res) => {
  try {
    const dataDb = await Country.findAll({
      include: { model: Activity },
    });
    if (dataDb.length === 0) {
      const response = await axios.get(`${URL}`);
      console.log("paises: ", response.data);
      const dataCountries = response.data.map((c) => {
        return {
          id: c.cca3,
          name: c.name.common,
          image: c.flags[0],
          continent: c.continents[0],
          capital: c.capital !== undefined ? c.capital[0] : "Not found",
          subregion:
            c.subregion !== undefined ? c.subregion : "Not available data",
          area: c.area !== undefined ? c.area : "Not available data",
          population: c.population,
          activities: c.activities,
        };
      });

      await Country.bulkCreate(dataCountries);
      res.status(200).json(dataCountries);
    } else {
      res.status(200).json(dataDb);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  const countryId = id.toUpperCase();
  try {
    const country = await Country.findOne({
      where: { id: countryId },
      include: { model: Activity },
    });
    console.log("country: ", country);
    if (!country) {
      res.status(400).json("Country not found");
    } else {
      res.status(200).json(country);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const country = await Country.findOne({
      where: { name: name },
      include: { model: Activity },
    });
    if (!country) {
      res.status(400).json("Country not found");
    } else {
      res.status(200).json(country);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = {
  getCountry,
  getCountryById,
  getCountryByName,
};
