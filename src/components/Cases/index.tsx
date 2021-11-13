import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import { Panel } from "../Panel";
import styles from "./Cases.module.scss";
import { RootState } from "../../store";
import { CountryDetails } from "./types";

export const Cases = () => {
  const { countryACases, countryBCases, chosenCountries, chosenDates } =
    useSelector((state: RootState) => ({
      countryACases: state.countryACases,
      countryBCases: state.countryBCases,
      chosenCountries: state.countries,
      chosenDates: state.dates,
    }));

  const countryADetails: CountryDetails[] = Array.from(countryACases);
  const countryBDetails: CountryDetails[] = Array.from(countryBCases);
  const countryA = chosenCountries[0];
  const countryB = chosenCountries[1];

  // list of date range
  const startDate = moment(chosenDates[0]);
  const endDate = moment(chosenDates[1]);
  let currentDate = moment(startDate);

  const dates = Array();

  while (currentDate < endDate) {
    dates.push({ Date: moment(currentDate).format("L") });
    currentDate = moment(currentDate).add(1, "days");
  }

  // create data for recharts
  const data = Array();

  for (let i = 0; i < dates.length; i++) {
    const casesA: number = countryADetails[i] ? countryADetails[i].Cases : 0;
    const casesB: number = countryBDetails[i] ? countryBDetails[i].Cases : 0;

    data.push({
      Date: dates[i].Date,
      [countryA]: casesA,
      [countryB]: casesB,
    });
  }

  return (
    <>
      <Panel />
      <div className={styles.Container}>
        {countryA && countryB && (
          <div className={styles.CasesContainer}>
            <h2>Total Number of Coronavirus Cases</h2>
            <h4>
              {countryA} vs. {countryB}
            </h4>
            <LineChart width={750} height={600} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip
                formatter={(value) => new Intl.NumberFormat("en").format(value)}
              />
              <Legend />
              <Line type="monotone" dataKey={countryA} stroke="#8884d8" />
              <Line type="monotone" dataKey={countryB} stroke="#82ca9d" />
            </LineChart>
          </div>
        )}
      </div>
    </>
  );
};
