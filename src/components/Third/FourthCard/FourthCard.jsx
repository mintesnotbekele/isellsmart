import React from "react";
import Image from "../Image";
import styles from "./fourthcard.module.css";
import weakEventNavigation from "../../../assets/images/weakEventNavigation.607a8475.png";
function FourthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>FAST AND RLIABLE</h3>
        <br></br>
        <p className={styles.left_p}>
          Need it gone asap? Shoot our team a text and well make it dissapear,
          same day if possible.
        </p>
      </div>
      <div className={styles.right}>
        <img src={weakEventNavigation} />
      </div>
    </div>
  );
}

export default FourthCard;
