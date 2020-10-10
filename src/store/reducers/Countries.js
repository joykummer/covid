import { SET_COUNTRIES } from "../types";

export default function countries(state = [], action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      return action.payload;
    }
    default:
      return state;
  }
}
