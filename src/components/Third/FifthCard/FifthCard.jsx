import React from "react";
import Image from "../Image";
import styles from "./fifthcard.module.css";
// import weakEventNavigation from "../../../assets/images/weakEventNavigation.607a8475.png";
import FeeGouging from "../../../assets/images/feeGouging.11513ef5.png";
import laptopFold from "/iphone/IPhone-11-pro-Max.png";

function FifthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>AT YOUR CONVENIENCE</h3>
        <br></br>
        <p className={styles.left_p}>
          You pick time and location at your convenience. We’ll do the pick up
        </p>
      </div>
      <div className={styles.right}>
        <img src={laptopFold} />
      </div>
    </div>
  );
}

export default FifthCard;
