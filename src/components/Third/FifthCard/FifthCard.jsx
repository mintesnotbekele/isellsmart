import React from "react";
import styles from "./fifthcard.module.css";
import FeeGouging from "../../../assets/images/feeGouging.11513ef5.png";
import Image from "../Image";
function FifthCard({ title, subtitle }) {
  return (
    <div className={styles.bottom_first}>
      <div className={styles.bottom_first_left}>
        <h3 className={styles.bottom_first_left_header}>
          5 TRUE VALUE IN SECONDS
        </h3>
        <br></br>
        <p className={styles.bottom_first_left_p}>
          Get a competitive offer in a few clicks. The offer you get is what we
          promise. Its really that easy
        </p>
      </div>
      <div className={styles.bottom_first_right}>
        {/* <Image path={FeeGouging} /> */}
        <img src={FeeGouging} />
      </div>
    </div>
  );
}

export default FifthCard;
