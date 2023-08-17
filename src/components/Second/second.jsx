import React from "react";
import HandWithPhone from "../../assets/images/handWithIphone.7281ad73.png";
import styles from "./second.module.css";
import { motion } from "framer-motion";

function Second() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 1,
      }}
      // style={{ opacity: 1 }}
    >
      <div className={styles.second}>
        <div className={styles.second_left_half}>
          <h2 className={styles.second_left_half_header}>
            Trade in. Upgrade. Save.
            <h2 className={styles.second_left_half_header}>
              It’s a win-win with iCellSmart
            </h2>
          </h2>
          <button className={styles.button}> 
            <a className={styles.button_anchor} href="#request-demo">
              Sell Your IPhone
            </a>
          </button>
        </div>
        <div className={styles.second_right_half}>
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
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWwidth: "100%",
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
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271332%27%20height=%271782%27/%3e"
                alt=""
              />
            </span>
            <img
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
              src={HandWithPhone}
              alt="hand with phone"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Second;
