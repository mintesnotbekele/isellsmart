import React from "react";
import { useMediaQuery } from "react-responsive";
import FirstCard from "./FirstCard/FirstCard";
import FourthCard from "./FourthCard/FourthCard";
import SecondCard from "./SecondCard/SecondCard";
import styles from "./third.module.css";
import { motion } from "framer-motion";
import ThridCard from "./ThirdCard/ThridCard";
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
          Power the smartphone and mobile device
            recommerce revolution with our technology at ISellSmart
            </span>
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

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Third;
