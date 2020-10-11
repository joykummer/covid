import React from "react";
import styles from "./PageNotFound.module.scss";

export function PageNotFound(props) {
  const tryAgainHandler = async (event) => {
    event.preventDefault();
    props.history.push("/");
  };
  return (
    <div className={styles.Container}>
      <h1>Page Not Found</h1>
      <button onClick={tryAgainHandler}>Try Again</button>
    </div>
  );
}
