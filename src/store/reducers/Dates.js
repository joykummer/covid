import { SET_DATES } from "../types";

export default function dates(state = [], action) {
  switch (action.type) {
    case SET_DATES: {
      return action.payload;
    }
    default:
      return state;
  }
}
