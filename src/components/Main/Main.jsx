import React from "react";
import Fifth from "../Fifth/Fifth";
import First from "../First/First";
import Form from "../Form/Form";
import Fourth from "../Fourth/Fourth";
import Second from "../Second/second";
import Seventh from "../Seventh/Seventh";
import Sixth from "../Sixth/Sixth";
import Third from "../Third/Third";
import styles from "./main.module.css";
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
      <Form />
    </div>
  );
}

export default Main;
