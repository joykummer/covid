import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button
      type="submit"
      className={styles.Submit}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
