import React from "react";
import FirstCard from "./FirstCard/FirstCard";
import FourthCard from "./FourthCard/FourthCard";
import SecondCard from "./SecondCard/SecondCard";
import styles from "./sixth.module.css";
import ThirdCard from "./ThirdCard/ThirdCard";
import { motion } from "framer-motion";
function Sixth() {
  return (
    <div className={styles.container} id="fans">
      <div
        style={{
          opacity: 1,
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          className={styles.header}
        >
          Competitive Pricing Fast & Secure Payments Hassle free Process
        </motion.h2>
      </div>
      <div className={styles.wrapper}>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </div>
  );
}

export default Sixth;
