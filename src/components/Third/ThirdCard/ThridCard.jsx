import React from "react";
import styles from "./thirdcard.module.css";
import transferRisk from "../../../assets/images/transferRisk.982140b4.png";
function ThridCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>CASH CREDIT</h3>
        <br></br>
        <p className={styles.left_p}>
          Same day cash on hand. Dont wait 4- 6 weeks for credit towards your
          account
        </p>
      </div>
      <div className={styles.right}>
        <img src={transferRisk} />
      </div>
    </div>
  );
}

export default ThridCard;
