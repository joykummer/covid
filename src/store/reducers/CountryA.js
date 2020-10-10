import { SET_COUNTRY_A } from "../types";

export default function countryACases(state = [], action) {
  switch (action.type) {
    case SET_COUNTRY_A: {
      return action.payload;
    }
    default:
      return state;
  }
}
