import React from "react";
import styles from "./firstcard.module.css";
import FeeGouging from "../../../assets/images/feeGouging.11513ef5.png";
import Image from "../Image";
function FirstCard({ title, subtitle }) {
  return (
    <div className={styles.bottom_first}>
      <div className={styles.bottom_first_left}>
        <h3
          className={styles.bottom_first_left_header}
          style={{
            color: "#d7f3f6",
            fontWeight: "bold",
          }}
        >
          Select Your Iphone Model
        </h3>
        <br></br>
        <p
          className={styles.bottom_first_left_p}
          style={{
            marginTop: "1.5rem",
            maxWidth: "450px",
          }}
        >
          Get Ready To Recycle Your Phone For Cash
        </p>
      </div>
      <div className={styles.bottom_first_right}>
        <Image path={FeeGouging} style={{ width: "50%" }} />
      </div>
    </div>
  );
}

export default FirstCard;
