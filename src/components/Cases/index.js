import React from "react";
import { connect } from "react-redux";
import { LineChart, Line } from "recharts";

function Cases(props) {
  // const countryAtest = Array.from(props.countryACases).concat(Array.from(props.countryBCases));
  const countryATest = Array.from(props.countryACases);
  const countryBTest = Array.from(props.countryBCases);
  // console.log("test", countryATest);
  // console.log("test2", countryATest[1].Country);

  const dataA = countryATest.map((instance) => ({
    Date: instance.Date,
    [instance.Country]: instance.Cases,
  }));
  const dataB = countryBTest.map((instance) => ({
    Date: instance.Date,
    [instance.Country]: instance.Cases,
    Country: instance.Cases,
  }));
  // console.log("hi", dataA);

  const data = [];

  for (let i = 0; i < dataA.length; i++) {
    for (let j = 0; j < dataB.length; j++) {
      if (dataA[i].Date === dataB[j].Date) {
        data.push({
          Date: countryATest[i].Date,
          [countryATest[i].Country]: countryATest[i].Cases,
          [countryBTest[j].Country]: countryBTest[j].Cases,
        });
      }
    }
  }

  // console.log("this is the data", data)

  return (
    <>
      {/* <div>
        {props.countryACases
          ? props.countryACases.map((countryACase, index) => {
              return <p key={index}>{countryACase.Cases}</p>;
            })
          : null}
        {props.countryBCases
          ? props.countryBCases.map((countryBCase, index) => {
              return <p key={index}>{countryBCase.Cases}</p>;
            })
          : null}
      </div> */}
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={countryATest[0].Country}
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey={countryBTest[0].Country}
          stroke="#000000"
        />
      </LineChart>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("in the mapstatetoprops", state);
  return {
    countryACases: state.countryACases,
    countryBCases: state.countryBCases,
  };
};

export default connect(mapStateToProps)(Cases);
