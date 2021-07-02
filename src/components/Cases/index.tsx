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
  const { countryACases, countryBCases, countries, datesTest } = useSelector(
    (state: RootState) => ({
      countryACases: state.countryACases,
      countryBCases: state.countryBCases,
      countries: state.countries,
      datesTest: state.dates,
    })
  );
  console.log({ countries });
  const countryA: CountryDetails[] = Array.from(countryACases);
  const countryB: CountryDetails[] = Array.from(countryBCases);

  // list of date range
  const startDate = moment(datesTest[0]);
  const endDate = moment(datesTest[1]);
  let currentDate = moment(startDate);

  const dates = Array();

  while (currentDate < endDate) {
    dates.push({ Date: moment(currentDate).format("L") });
    currentDate = moment(currentDate).add(1, "days");
  }

  // create data for recharts
  const data = Array();

  for (let i = 0; i < dates.length; i++) {
    const casesA: number = countryA[i] ? countryA[i].Cases : 0;
    const casesB: number = countryB[i] ? countryB[i].Cases : 0;

    data.push({
      Date: dates[i].Date,
      [countries[0]]: casesA,
      [countries[1]]: casesB,
    });
  }

  return (
    <div className={styles.Container}>
      <Panel />
      {countries[0] && countries[1] && (
        <div className={styles.CasesContainer}>
          <h2>Total Number of Coronavirus Cases</h2>
          <h4>
            {countries[0]} vs. {countries[1]}
          </h4>
          <LineChart width={750} height={600} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip
              formatter={(value) => new Intl.NumberFormat("en").format(value)}
            />
            <Legend />
            <Line type="monotone" dataKey={countries[0]} stroke="#8884d8" />
            <Line type="monotone" dataKey={countries[1]} stroke="#82ca9d" />
          </LineChart>
        </div>
      )}
    </div>
  );
};
