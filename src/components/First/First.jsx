import React from "react";
import styles from "./first.module.css";
import desktop from "/desk-top.svg";
import deskleft from "/desk-left.svg";
import deskright from "/desk-right.svg";
import { motion } from "framer-motion";

function First() {
  return (
    <div className={styles.container}>
      <Overlay
        path={desktop}
        size={{
          maxHeight: 500,
          maxWidth: 777,
        }}
        initialAnimation={{
          translateY: -1500,
        }}
        animate={{ translateY: 0, opacity: 1 }}
        style={{
          top: -100,
          left: "30%",
        }}
      />
      <Overlay
        size={{
          maxHeight: 452,
          maxWidth: 882,
        }}
        path={deskleft}
        style={{
              
              zIndex : -1,
          left: "0%",
          bottom: "-15%",
        }}
      />
      <Overlay
        size={{
          maxHeight: 414,
          maxWidth: 431,
        }}
        initialAnimation={{
          translateX: 1500,
        }}
        animate={{ translateX: 0, opacity: 1 }}
        path={deskright}
        style={{
          top: "38%",
          left: "auto",
          bottom: "0%",
          right: -150,
        }}
      />
    </div>
  );
}

function Overlay({ style, path, size, initialAnimation, animate }) {
  return (
    <motion.div
      initial={initialAnimation}
      animate={animate}
      transition={{
        duration: 1,
        delay: 2,
      }}
      whileInView={{ opacity: 1 }}
      style={{
        position: "absolute",
        zIndex: -1,
        top: "auto",
        opacity: 1,
        transform: "translateX(0%) translateY(0%) translateZ(0px)",
        ...style,
      }}
    >
      <div
        style={{
          ...size,
          aspectRatio: 4 / 3,
        }}
      >
        <span className={styles.span_wrapper}>
          <span className={styles.span_img}>
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
          <img src={path} className={styles.img} alt="" />
        </span>
      </div>
    </motion.div>
  );
}

export default First;
