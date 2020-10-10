import React from "react";
import { connect } from "react-redux";

function Cases(props) {

  return (
    <div>
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
    </div>
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
