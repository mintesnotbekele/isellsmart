import React from "react";
import styles from "./tradin.module.css";
const TradinModel = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.title}>select trade in model</h6>
      <ul className={styles.listItems}>
        <li className={styles.phone}>
          <a href="/form">iPhone</a>
        </li>
        <li className={styles.items}>iPad</li>
        <li className={styles.items}>MacBook</li>
        <li className={styles.items}>Watch</li>
      </ul>
    </div>
  );
};

export default TradinModel;
