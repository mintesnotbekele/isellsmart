import React from "react";
import styles from "./fourth.module.css";
import { motion } from "framer-motion";
import audienceGroup from "../../assets/images/audienceGroup.14dd897c.png";
function Fourth() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ opacity: 1 }}>
          <motion.p
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.p}
          >
            We understand that upgrading to the latest Phone is an exciting
            experience, and we're here to make the process of selling your old
            iPhone simple and rewarding.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
