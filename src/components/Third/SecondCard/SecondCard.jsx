import React from "react";
import styles from "./secondcard.module.css";
import snubbedArtists from "../../../assets/images/snubbedArtists.5210cf28.png";
import Image from "../Image";
function SecondCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>MOBILE SERVICE ON THE GO</h3>
        <p className={styles.left_p}>
          <br></br>
          You’ll never have to go out of your way to ship anything again. We’ll
          come to you.
        </p>
      </div>
      <div className={styles.right}>
        <img src={snubbedArtists} />
      </div>
    </div>
  );
}

export default SecondCard;
