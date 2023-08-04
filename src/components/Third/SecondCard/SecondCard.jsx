import React from "react";
import styles from "./secondcard.module.css";
import snubbedArtists from "../../../assets/images/snubbedArtists.5210cf28.png";
import Image from "../Image";
function SecondCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>Fill out all the details</h3>
        <p className={styles.left_p}>
          <br></br>
          Fill out all the details including your personal info
        </p>
      </div>
      <div className={styles.right}>
        <img src={snubbedArtists} />
      </div>
    </div>
  );
}

export default SecondCard;
