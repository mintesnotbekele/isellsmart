import React from "react";
import Image from "../Image";
import styles from "./sixthcard.module.css";
import laptopFold from "/iphone/11iphone.png";

function SixthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>CRACKED GLASS? ITS OK</h3>
        <br></br>
        <p className={styles.left_p}>
          Cracked front or back glass? Its ok. Our in-house technitions have the
          knowledge and the skills to restore the device when posssible
        </p>
      </div>
      <div className={styles.right}>
        <img src={laptopFold} />
      </div>
    </div>
  );
}

export default SixthCard;
