import { combineReducers } from "redux";
import countryACases from "./CountryA";
import countryBCases from "./CountryB";
import countries from "./Countries";
import dates from "./Dates";

const reducers = combineReducers({
  countryACases,
  countryBCases,
  countries,
  dates,
});

export default reducers;
