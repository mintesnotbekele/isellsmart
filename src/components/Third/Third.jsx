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
    <>
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
              <span className={`${styles.top_header_span} my-10`}>
                We understand that upgrading to the latest iphone model is an
                exciting experience.
              </span>
              <br></br>
              <br></br>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center container mx-auto">
        <video width="800" height="700" autoplay controls loop>
          <source src="/pexels.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="getReal" className={styles.container}>
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
    </>
  );
}

export default Third;
