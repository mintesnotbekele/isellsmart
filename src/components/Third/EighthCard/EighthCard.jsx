import React from "react";
import Image from "../Image";
import styles from "./eighthcard.module.css";
import weakEventNavigation from "../../../assets/images/weakEventNavigation.607a8475.png";

function EighthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>ITS A SMART CHOICE</h3>
        <br></br>
        <p className={styles.left_p}>
          All the reasons above makes trading in with icellsmart a smart choice.
        </p>
      </div>
      <div className={styles.right}>
        <img src={weakEventNavigation} />
      </div>
    </div>
  );
}

export default EighthCard;
