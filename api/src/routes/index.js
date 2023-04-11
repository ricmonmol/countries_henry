const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getCountry,
  getCountryById,
  getCountryByName,
} = require("../controllers/country.controller");
const {
  postActivity,
  getActivity,
} = require("../controllers/activity.controller");
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getCountry);
router.get("/countries/:id", getCountryById);
router.get("/countries/name/:name", getCountryByName);
router.post("/activities", postActivity);
router.get("/activities", getActivity);

module.exports = router;
