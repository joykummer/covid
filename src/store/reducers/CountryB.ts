import { SET_COUNTRY_B } from "../types";

export default function countryBCases(state = [], action) {
  switch (action.type) {
    case SET_COUNTRY_B: {
      return action.payload;
    }
    default:
      return state;
  }
}
