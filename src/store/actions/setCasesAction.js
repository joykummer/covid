import { SET_CASES } from "../types";
import Axios from "../../axios";

export const casesAction = (organisations) => {
  return {
    type: SET_CASES,
    payload: organisations,
  };
};

export const setCasesFunction = ({countryA, startDate, endDate}) => async (dispatch) => {
  try {
    const response = await Axios.get(`${countryA}/status/confirmed`);
    console.log('response', response);
    dispatch(setCasesAction(response.data));
  } catch (e) {
    return e;
  }
};
