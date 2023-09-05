import React from "react";
import styles from "./seventh.module.css";
import phonesImage from "../../assets/images/phonesImage.8676c2a2.png";
import PhoneImage2 from "/Iphone-14-and-Iphone-14-Plus-PNG.png";
import { motion } from "framer-motion";
import deskright from "/desk-right.svg";
import deskleft from "/desk-left.svg";
function Seventh() {
  return (
    <div className={styles.container} id="technology">
      <div className={styles.first}>
        {/* TODO */}
        <div className={styles.first_left}>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 2,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{ opacity: 1 }}
            style={{
              maxWidth: 500,
              maxHeight: 453,
              aspectRatio: 2 / 1,
            }}
          >
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27877%27%20height=%27600%27/%3e"
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
                src={deskleft}
                alt=""
              />
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{ opacity: 1 }}
          className={styles.first_right}
        >
          <div
            style={{
              maxWidth: 600,
              maxHeight: 453,
              aspectRatio: 4 / 3,
            }}
          >
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
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27877%27%20height=%27600%27/%3e"
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
                src={deskright}
                alt=""
              />
            </span>
          </div>
        </motion.div>
      </div>
      <div className={styles.second}>
        <div style={{ opacity: 1 }}>
          <motion.h1
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            With iCellSmart, you can get a great value for your current device
            and apply it toward a new one
          </motion.h1>
        </div>
      </div>
      <div className={styles.third}>
        <div style={{ opacity: 1 }}>
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
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271931%27%20height=%271746%27/%3e"
              ></img>
            </span>
            <img
              src={PhoneImage2}
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
                minHeight: "70%",
                maxHeight: "100%",
                backgroundSize: "contain",
              }}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
