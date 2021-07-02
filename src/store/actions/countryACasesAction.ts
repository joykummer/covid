import { SET_COUNTRY_A } from "../types";
import Axios from "../../axios";

export const countryACasesAction = (cases) => {
  return {
    type: SET_COUNTRY_A,
    payload: cases,
  };
};

export const countryACasesFunction = (countryA, startDate, endDate) => async (
  dispatch
) => {
  try {
    const response = await Axios.get(
      `https://api.covid19api.com/total/country/${countryA}/status/confirmed`,
      { params: { from: startDate, to: endDate } }
    );
    dispatch(countryACasesAction(response.data));
  } catch (error) {
    if (error.response) {
      // client received an error response (5xx, 4xx)
      return error.response;
    } else if (error.request) {
      // client never received a response, or request never left
      return error.request;
    } else {
      // anything else
      return error;
    }
  }
};
