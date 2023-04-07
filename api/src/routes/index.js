const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  getCountryHandler,
  getCountryIdHandler,
  getCountryNameHandler,
} = require("../handlers/countryHandler");
const {
  postActivity,
  getActivity,
} = require("../controllers/activity.controller");
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", getCountryHandler);
router.get("/countries/:id", getCountryIdHandler);
router.get("/countries/name/:name", getCountryNameHandler);
router.post("/activities", postActivity);
router.get("/activities", getActivity);

module.exports = router;
