import React from "react";
import styles from "./tradin.module.css";
const TradinModel = () => {
  return (
    <>
      {/* <div className={styles.container}> */}
      {/* <h6 className={styles.title}>select trade in model</h6> */}
      {/* <ul className={styles.listItems}>
        <li className={styles.phone}>
          <a href="/form">iPhone</a>
        </li>
        <li className={styles.items}>iPad</li>
        <li className={styles.items}>MacBook</li>
        <li className={styles.items}>Watch</li>
      </ul> */}
      {/* </div> */}
      <ul className={styles.listItems}>
        <li className="px-7 py-3 text-sm border-2 border-white shadow-sm shadow-white rounded-full capitalize text-center capitalize">
          <a href="/form">iPhone</a>
        </li>
        <li className="px-7 py-3 text-sm border-2 border-gray-400 rounded-full capitalize text-gray-300 text-center text-lg capitalize">
          iPad
        </li>
        <li className="px-7 py-3 text-sm border-2 border-gray-400 rounded-full capitalize text-gray-300 text-center text-lg capitalize">
          MacBook
        </li>
        <li className="px-7 py-3 text-sm border-2 border-gray-400 rounded-full capitalize text-gray-300 text-center text-lg capitalize">
          Watch
        </li>
      </ul>
    </>
  );
};

export default TradinModel;
