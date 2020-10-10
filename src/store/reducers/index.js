import { combineReducers } from "redux";
import countryACases from "./CountryA";
import countryBCases from "./CountryB";

const reducers = combineReducers({
  countryACases,
  countryBCases,
});

export default reducers;
