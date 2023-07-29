import React from "react";
import Fifth from "../Fifth/Fifth";
import First from "../First/First";
import Fourth from "../Fourth/Fourth";
import Second from "../Second/second";
import Seventh from "../Seventh/Seventh";
import Sixth from "../Sixth/Sixth";
import Third from "../Third/Third";
import styles from "./main.module.css";
import Phones from "../Phones/Phones";
function Main() {
  return (
    <div className={styles.main}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Phones />
    </div>
  );
}

export default Main;
