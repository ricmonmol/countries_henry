const { Country, Activity } = require("../db");
const axios = require("axios");
const URL = "https://restcountries.com/v3/all";

const getCountry = async (req, res) => {
  try {
    const dataDb = await Country.findAll();
    if (dataDb.length === 0) {
      const response = await axios.get(`${URL}`);
      const dataCountries = response.data.map((c) => {
        return {
          id: c.cca3,
          name: c.name.common,
          image: c.flags[0],
          continent: c.continents[0],
          capital: c.capital !== undefined ? c.capital[0] : "Not found",
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });

      await Country.bulkCreate(dataCountries);
      console.log("data loaded");
      res.status(200).json(dataCountries);
    } else {
      console.log("data is on db");
      res.status(200).json(dataDb);
    }
  } catch (error) {
    console.log("error en la carga");
    res.status(500).json(error.message);
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  const countryId = id.toUpperCase();
  try {
    const country = await Country.findByOne({
      where: { id: countryId },
      include: { model: Activity },
    });
    if (!country) {
      res.status(400).json({ message: "Country not found" });
    } else {
      res.status(200).json(country);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getCountryByName = async (req, res) => {
  const { countryName } = req.params;
  try {
    const country = await Country.findByOne({
      where: { name: countryName },
      include: { model: Activity },
    });
    if (!country) {
      res.status(400).json({ message: "Country not found" });
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
