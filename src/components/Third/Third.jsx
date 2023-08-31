import React from "react";
import { useMediaQuery } from "react-responsive";
import FirstCard from "./FirstCard/FirstCard";
import FourthCard from "./FourthCard/FourthCard";
import SecondCard from "./SecondCard/SecondCard";
import styles from "./third.module.css";
import { motion } from "framer-motion";
import ThridCard from "./ThirdCard/ThridCard";
import FifthCard from "./FifthCard/FifthCard";
import SixthCard from "./SixthCard/SixthCard";
import SeventhCard from "./SeventhCard/SeventhCard";
import EighthCard from "./EighthCard/EighthCard";
function Third() {
  const isMobile = useMediaQuery({
    maxWidth: 600,
  });
  return (
    <div id="getReal" className={styles.container}>
      <div className={styles.top_container}>
        <div style={{ opacity: 1 }}>
          <motion.h2
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.top_header}
          >
            <span className={styles.top_header_span}>
              We understand that upgrading to the latest iphone model is an
              exciting experience.
            </span>
            <br></br>
            <br></br>
            {/* <span className={styles.top_header}>
              We’re here to make the process of selling your old phone simple
              and rewarding.
            </span> */}
          </motion.h2>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.bottom_container_wrapper}>
          {isMobile && <FourthCard />}
          <FirstCard />
          <SecondCard />
          <ThridCard />
          <FourthCard />
          <FifthCard />
          <SixthCard />
          <SeventhCard />
          <EighthCard />
        </div>
      </div>
    </div>
  );
}

export default Third;
