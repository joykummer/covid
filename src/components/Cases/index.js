import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Cases(props) {
  const countryA = Array.from(props.countryACases);
  const countryB = Array.from(props.countryBCases);

  // list of date range
  const startDate = moment(props.dates[0]);
  const endDate = moment(props.dates[1]);
  let currentDate = moment(startDate);

  const dates = [];

  while (currentDate < endDate) {
    dates.push({ Date: moment(currentDate).format("L") });
    currentDate = moment(currentDate).add(1, "days");
  }

  // create data for recharts
  const data = [];

  for (let i = 0; i < dates.length; i++) {
    const casesA = countryA[i] ? countryA[i].Cases : 0;
    const casesB = countryB[i] ? countryB[i].Cases : 0;
    data.push({
      Date: dates[i].Date,
      [props.countries[0]]: casesA,
      [props.countries[1]]: casesB,
    });
  }

  return (
    <>
      <LineChart width={500} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
        <Legend />
        <Line type="monotone" dataKey={props.countries[0]} stroke="#8884d8" />
        <Line type="monotone" dataKey={props.countries[1]} stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    countryACases: state.countryACases,
    countryBCases: state.countryBCases,
    countries: state.countries,
    dates: state.dates,
  };
};

export default connect(mapStateToProps)(Cases);
