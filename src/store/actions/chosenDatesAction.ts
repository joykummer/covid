import { SET_DATES } from "../types";

export const chosenDatesAction = (chosenDates) => {
  return {
    type: SET_DATES,
    payload: chosenDates,
  };
};

export const chosenDatesFunction = (startDate, endDate) => async (dispatch) => {
  try {
    const chosenDates = [startDate, endDate];
    dispatch(chosenDatesAction(chosenDates));
  } catch (error) {
    console.log("error", error);
  }
};
