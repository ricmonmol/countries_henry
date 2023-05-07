export default function validate(input) {
  const errors = {};

  if (!input.nombre || input.nombre.value === "") {
    errors.nombre = "Name is required";
  } else {
    delete errors.nombre;
  }

  if (!input.dificultad) {
    errors.dificultad = "Check Dificultad";
  } else {
    delete errors.dificultad;
  }

  if (
    !input.duracion ||
    input.duracion.value === "" ||
    input.duracion.value < 0 ||
    input.duracion.value > 4
  ) {
    errors.duracion = "Check Duracion";
  } else {
    delete errors.duracion;
  }

  if (!input.season) {
    errors.season = "Season is requied";
  } else {
    delete errors.season;
  }

  if (!input.countries) {
    errors.countryId = "A country must be selected";
  } else {
    delete errors.countryId;
  }

  return errors;
}
