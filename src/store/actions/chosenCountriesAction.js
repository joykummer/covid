import { SET_COUNTRIES } from "../types";

export const chosenCountriesAction = (chosenCountries) => {
  return {
    type: SET_COUNTRIES,
    payload: chosenCountries,
  };
};

export const chosenCountriesFunction = (countryA, countryB) => async (dispatch) => {
  try {
    const chosenCountries = [countryA, countryB];
    dispatch(chosenCountriesAction(chosenCountries));
  } catch (error) {
    console.log("error", error);
  }
};
