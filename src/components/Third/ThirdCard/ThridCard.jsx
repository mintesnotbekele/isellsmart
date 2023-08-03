import React from "react";
import styles from "./thirdcard.module.css";
import transferRisk from "../../../assets/images/transferRisk.982140b4.png";
import Image from "../Image";
function ThridCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>
          Our Executive will meet you to evaluate & buy the Device
        </h3>
        <br></br>
        <p
          className={styles.left_p}
          style={{
            fontSize: "1.7rem",
          }}
        >
          Find My iPhone must be turned off to sell to iCellSmart. For all
          phones, we also recommend factory resetting your device to remove and
          protect your personal information.
        </p>
      </div>
      <div className={styles.right}>
        <Image path={transferRisk} style={{ width: "30%", top: "0vh" }} />
      </div>
    </div>
  );
}

export default ThridCard;
