import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countryList from "react-select-country-list";
import styles from "./Form.module.scss";

export function Form() {
  const [countryA, setCountryA] = useState("default");
  const [countryB, setCountryB] = useState("default");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const countries = countryList().getData();

  const onSubmitHandler = () => {
    console.log("hello wolrld");
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
};
