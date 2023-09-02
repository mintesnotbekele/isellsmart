import React from "react";
import Image from "../Image";
import styles from "./seventhcard.module.css";
import transferRisk from "../../../assets/images/transferRisk.982140b4.png";

function SeventhCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>IT’S A WIN-WIN</h3>
        <br></br>
        <p className={styles.left_p}>
          You Win, We Win, Repurpose your old device. Someone somewhere has a
          new purpose for it.
        </p>
      </div>
      <div className={styles.right}>
        <img src={transferRisk} />
      </div>
    </div>
  );
}

export default SeventhCard;
