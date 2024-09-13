import React from "react";
import styles from "./ErrorBlock.module.scss";

const ErrorBlock = () => {
  return (
    <div className={styles.error}>
      <h2>
        Что-то сломалось <icon>😕</icon>
      </h2>
      <p>Повторите попытку позже.</p>
    </div>
  );
};

export default ErrorBlock;
