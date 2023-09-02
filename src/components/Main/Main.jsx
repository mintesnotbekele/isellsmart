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
import ServicesArea from "../SERVICE AREAS/ServicesArea";
import TradinModel from "../TreadinModel/TradinModel";
import Testimonial from "../Testimonials/Testimonial";
function Main() {
  return (
    <div className={styles.main}>
      <First />
      <Second />
      {/* <TradinModel /> */}
      <Third />
      <Fourth />
      <ServicesArea />
      <Testimonial />
      <Fifth />
      {/* <Sixth /> */}
      <Seventh />

      <Phones />
    </div>
  );
}

export default Main;
