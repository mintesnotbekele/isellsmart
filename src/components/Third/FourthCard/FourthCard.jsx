import React from "react";
import Image from "../Image";
import styles from "./fourthcard.module.css";
import weakEventNavigation from "../../../assets/images/weakEventNavigation.607a8475.png";
function FourthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>Get Paid Instantly</h3>
        <br></br>
        <p className={styles.left_p}>
          Get paid for your Iphone using any Modes of Payment available in our
          website
        </p>
      </div>
      <div className={styles.right}>
        <img src={weakEventNavigation} />
      </div>
    </div>
  );
}

export default FourthCard;
