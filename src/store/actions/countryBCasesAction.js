import { SET_COUNTRY_B } from "../types";
import Axios from "../../axios";

export const countryBAction = (cases) => {
  return {
    type: SET_COUNTRY_B,
    payload: cases,
  };
};

export const countryBCasesFunction = (countryB, startDate, endDate) => async (
  dispatch
) => {
  try {
    const response = await Axios.get(
      `https://api.covid19api.com/total/country/${countryB}/status/confirmed`,
      { params: { from: startDate, to: endDate } }
    );
    dispatch(countryBAction(response.data));
  } catch (error) {
    console.log("error", error);
  }
};
