import React, { useState, useEffect } from "react";
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
  const [countryA, setCountryA] = useState("");
  const [countryB, setCountryB] = useState("");
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
    history.push("/results");
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={onSubmitHandler} className={styles.Form}>
        <div className={styles.Countries}>
          <div className={styles.CountryContainer}>
            <label className={styles.Label}>COUNTRY 1</label>
            <select
              required
              value={countryA}
              onChange={(e) => setCountryA(e.target.value)}
              className={styles.Country}
            >
              <option value="" disabled>
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
            <label className={styles.Label}>COUNTRY 2</label>
            <select
              required
              value={countryB}
              onChange={(e) => setCountryB(e.target.value)}
              className={styles.Country}
            >
              <option value="" disabled>
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
            <label className={styles.Label}>START DATE</label>
            <DatePicker
              required
              placeholderText="-- Select --"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              className={styles.Date}
              maxDate={new Date()}
            />
          </div>
          <div className={styles.DateContainer}>
            <label className={styles.Label}>END DATE</label>
            <DatePicker
              required
              placeholderText="-- Select --"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM/dd/yyyy"
              minDate={startDate}
              maxDate={new Date()}
              className={styles.Date}
            />
          </div>
        </div>
        <button type="submit" className={styles.Submit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
