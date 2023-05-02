import axios from "axios";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITY = "GET_ACTIVITY";
export const FILTER = "FILTER";
export const RESET_FILTER = "RESET_FILTER";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";
const URL = "http://localhost:3001";

export function getCountry() {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries`);
      console.log("paises: ", response);
      return dispatch({
        type: GET_COUNTRY,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getCountryById(id) {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_ID,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getCountryByName(name) {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries/name/${name}`);
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function addActivity(activity) {
  try {
    return async function (dispatch) {
      await axios.post(`${URL}/activities`, activity);
      return dispatch({
        type: ADD_ACTIVITY,
        payload: activity,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getActivity() {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/activities`);
      return dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function filter(filter) {
  return {
    type: FILTER,
    payload: filter,
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}

export function orderName(id) {
  return {
    type: ORDER_NAME,
    payload: id,
  };
}

export function orderPopulation(id) {
  return {
    type: ORDER_POPULATION,
    payload: id,
  };
}
