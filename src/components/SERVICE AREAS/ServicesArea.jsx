import React from "react";
import styles from "./services.module.css";
const ServicesArea = () => {
  return (
    <>
      <h3 className={styles.header}>SERVICE AREAS</h3>
      <section className={styles.container}>
        <div className={styles.servicesContainer}>
          <div className={styles.card}>
            <h1 className={styles.title}>carlsbad </h1>
            <h1 className={styles.title}>Encinitas</h1>
            <h1 className={styles.title}>Escondido</h1>
            <h1 className={styles.title}>Oceanside</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Vista </h1>
            <h1 className={styles.title}>San marcos</h1>
            <h1 className={styles.title}>Poway</h1>
            <h1 className={styles.title}>Santee</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Lakeside </h1>
            <h1 className={styles.title}>El cajon city</h1>
            <h1 className={styles.title}>La mesa</h1>
            <h1 className={styles.title}>Mission valley</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Lakeside </h1>
            <h1 className={styles.title}>El cajon city</h1>
            <h1 className={styles.title}>La mesa</h1>
            <h1 className={styles.title}>Mission valley</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
