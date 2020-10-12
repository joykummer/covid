import { SET_DATES } from "../types";

export const datesAction = (dates) => {
  return {
    type: SET_DATES,
    payload: dates,
  };
};

export const datesFunction = (startDate, endDate) => async (dispatch) => {
  try {
    const dates = [startDate, endDate];
    dispatch(datesAction(dates));
  } catch (error) {
    console.log("error", error);
  }
};
