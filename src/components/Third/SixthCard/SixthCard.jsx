import React from "react";
import Image from "../Image";
import styles from "./sixthcard.module.css";
import snubbedArtists from "../../../assets/images/snubbedArtists.5210cf28.png";

function SixthCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.left_header}>CRAKED GLASS? ITS OK</h3>
        <br></br>
        <p className={styles.left_p}>
          Cracked front or back glass? Its ok. Our in-house technitions have the
          knowledge and the skills to restore the device when posssible
        </p>
      </div>
      <div className={styles.right}>
        <img src={snubbedArtists} />
      </div>
    </div>
  );
}

export default SixthCard;
