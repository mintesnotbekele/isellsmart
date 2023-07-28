import React from "react";
import styles from "./fourth.module.css";
import { motion } from "framer-motion";
import audienceGroup from "../../assets/images/audienceGroup.14dd897c.png";
function Fourth() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.wrapper}>
        <div style={{ opacity: 1 }}>
          <motion.h2
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 1.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            {/* The trusted destination for selling your used iPhones. */}
            {/* <span>iCellSmart</span> */}
          </motion.h2>
        </div>
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
            
       We understand that upgrading to the latest Phone is an exciting experience, and we're here to make the process of selling  your old iPhone simple and rewarding.
            
          </motion.p>
        </div>
        <div className={styles.content}>
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27680%27%20height=%27256%27/%3e"
              ></img>
            </span>
            <img
              src={audienceGroup}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
