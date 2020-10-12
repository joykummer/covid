import { SET_COUNTRIES } from "../types";

export const countriesAction = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const countriesFunction = (countryA, countryB) => async (dispatch) => {
  try {
    const countries = [countryA, countryB];
    dispatch(countriesAction(countries));
  } catch (error) {
    console.log("error", error);
  }
};
