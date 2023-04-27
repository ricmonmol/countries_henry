import {
  GET_COUNTRY,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  ADD_ACTIVITY,
  GET_ACTIVITY,
  FILTER,
  ORDER_NAME,
  ORDER_POPULATION,
} from "./actions";
var sortedCountries;
const initialState = {
  countries: [],
  activities: [],
  country: {},
  filteredCountries: [],
  sortedCountries: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTER:
      let filteredCountries = state.countries;
      let { filterType, filterValue } = action.payload;
      if (filterType === "Continente") {
        filteredCountries = filteredCountries.filter(
          (c) => c.continent === filterValue
        );
      }
      if (filterType === "Actividad") {
        filteredCountries = filteredCountries.filter((c) =>
          c.activities.some((a) => a.name === filterValue)
        );
      }
      if (filterType === "Nombre") {
        filteredCountries = filteredCountries.filter((c) =>
          c.name.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
      return {
        ...state,
        countries: filteredCountries,
      };
    case ORDER_NAME:
      if (action.payload === "Ascendente") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      }
      if (action.payload === "Descendente") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return a.name > b.name ? -1 : 1;
        });
      }
      return {
        ...state,
        countries: sortedCountries,
      };
    case ORDER_POPULATION:
      if (action.payload === "Ascendente") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return a.population > b.population ? 1 : -1;
        });
      }
      if (action.payload === "Descendente") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return a.population > b.population ? -1 : 1;
        });
      }
      return {
        ...state,
        countries: sortedCountries,
      };
    default:
      return state;
  }
}

export default rootReducer;
