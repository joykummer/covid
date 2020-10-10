import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from "react-select-country-list";
import styles from "./Form.module.scss";
import { countryACasesFunction } from "../../store/actions/countryACasesAction";
import { countryBCasesFunction } from "../../store/actions/countryBCasesAction";
import { datesFunction } from "../../store/actions/datesAction";
import { countriesFunction } from "../../store/actions/countriesAction";

export function Form() {
  const [countryA, setCountryA] = useState("default");
  const [countryB, setCountryB] = useState("default");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const countries = countryList().getData();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    await dispatch(countryACasesFunction(countryA, startDate, endDate));
    await dispatch(countryBCasesFunction(countryB, startDate, endDate));
    await dispatch(datesFunction(startDate, endDate));
    await dispatch(countriesFunction(countryA, countryB));
    history.push("/helloworld");
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.Form}>
      <div className={styles.Countries}>
        <div className={styles.CountryContainer}>
          <label className={styles.Label}>Country A</label>
          <select
            value={countryA}
            onChange={(e) => setCountryA(e.target.value)}
            className={styles.Country}
          >
            <option value="default" disabled>
              -- Select --
            </option>
            {countries
              ? countries.map((country) => (
                  <option key={country.value}>{country.label}</option>
                ))
              : null}
          </select>
        </div>
        <div className={styles.CountryContainer}>
          <label className={styles.Label}>Country B</label>
          <select
            value={countryB}
            onChange={(e) => setCountryB(e.target.value)}
            className={styles.Country}
          >
            <option value="default" disabled>
              -- Select --
            </option>
            {countries
              ? countries.map((country) => (
                  <option key={country.value}>{country.label}</option>
                ))
              : null}
          </select>
        </div>
      </div>
      <div className={styles.Dates}>
        <div className={styles.DateContainer}>
          <label className={styles.Label}>Start Date</label>
          <DatePicker
            required
            placeholderText="-- Select --"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className={styles.Date}
            maxDate={new Date()}
          />
        </div>
        <div className={styles.DateContainer}>
          <label className={styles.Label}>End Date</label>
          <DatePicker
            required
            placeholderText="-- Select --"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            // minDate={countryA}
            maxDate={new Date()}
            className={styles.Date}
          />
        </div>
      </div>
      <input type="submit" className={styles.Submit} />
    </form>
  );
}
