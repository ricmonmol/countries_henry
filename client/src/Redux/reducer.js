import {
  GET_COUNTRY,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  ADD_ACTIVITY,
  GET_ACTIVITY,
  FILTER,
  ORDER,
} from "./actions";

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
      let filteredCountries = [...state.countries];
      let { filterType, filterValue } = action.payload;
      let filterApplied;
      if (filterType === "Continente") {
        filterApplied = filteredCountries.filter(
          (c) => c.continent === filterValue
        );
      }
      if (filterType === "Actividad") {
        filterApplied = filteredCountries.filter((c) =>
          c.activities.some((a) => a.name === filterValue)
        );
      }
      return {
        ...state,
        filteredCountries: [...filterApplied],
      };
    case ORDER:
      let sortedCountries;
      if (action.payload === "Nombre") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      }
      if (action.payload === "Poblacion") {
        sortedCountries = [...state.countries].sort((a, b) => {
          return b.population > a.population ? 1 : -1;
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
