import React from "react";
import styles from "./services.module.css";
import { services } from "./data";
const ServicesArea = () => {
  return (
    <>
      <h3 className={styles.header}>SERVICE AREAS</h3>
      <section className={styles.container}>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h1 className={styles.title}>{service}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesArea;
