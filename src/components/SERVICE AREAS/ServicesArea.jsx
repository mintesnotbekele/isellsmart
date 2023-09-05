import React from "react";
import styles from "./services.module.css";
const ServicesArea = () => {
  return (
    <div className="mt-10 px-5">
      <h3 className="text-center text-5xl font-semibold">SERVICE AREAS</h3>
      <section className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center max-w-4xl mx-auto gap-y-5 gap-x-10 ">
          <div className="grid justify-items-center px-3 py-5 gap-y-5 border-2 border-gray-200 shadow-sm shadow-white rounded-xl min-w-full">
            <h1 className={styles.title}>carlsbad </h1>
            <h1 className={styles.title}>Encinitas</h1>
            <h1 className={styles.title}>Escondido</h1>
            <h1 className={styles.title}>Oceanside</h1>
          </div>
          <div className="grid justify-items-center px-5 py-5 gap-y-5 border-2 border-gray-200 shadow-sm shadow-white rounded-xl min-w-full">
            <h1 className={styles.title}>Vista </h1>
            <h1 className={styles.title}>San marcos</h1>
            <h1 className={styles.title}>Poway</h1>
            <h1 className={styles.title}>Santee</h1>
          </div>
          <div className="grid justify-items-center px-3 py-5 gap-y-5 border-2 border-gray-200 shadow-sm shadow-white rounded-xl min-w-full">
            <h1 className={styles.title}>Lakeside </h1>
            <h1 className={styles.title}>El cajon city</h1>
            <h1 className={styles.title}>La mesa</h1>
            <h1 className={styles.title}>Mission valley</h1>
          </div>
          <div className="grid justify-items-center px-5 py-5 gap-y-5 border-2 border-gray-200 shadow-sm shadow-white rounded-xl min-w-full">
            <h1 className={styles.title}>Lakeside </h1>
            <h1 className={styles.title}>El cajon city</h1>
            <h1 className={styles.title}>La mesa</h1>
            <h1 className={styles.title}>Mission valley</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesArea;
