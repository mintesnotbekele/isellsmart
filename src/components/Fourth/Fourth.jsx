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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 text-5xl text-center py-10">
              All the reasons to trade in with iCellSmart. Including one very
              big. We're Mobile, cash on-the-go
            </span>
            {/* <span className="">
              All the reasons to trade in with iCellSmart. Including one very
              big. We're Mobile, cash on-the-go
            </span> */}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
