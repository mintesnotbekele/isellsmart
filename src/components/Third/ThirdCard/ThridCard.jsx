import React from "react";
import styles from "./thirdcard.module.css";
import transferRisk from "../../../assets/images/transferRisk.982140b4.png";
function ThridCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>
          Get your Device Evaluated
        </h3>
        <br></br>
        <p className={styles.left_p}>
           We also recommend factory resetting your<br/> device  to remove and
          protect your personal information.
        </p>
      </div>
      <div className={styles.right}>
        <img src={transferRisk} />
      </div>
    </div>
  );
}

export default ThridCard;
