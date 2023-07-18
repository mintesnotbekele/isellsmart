import React, { useState } from "react";
import styles from "./header.module.css";
import { useMediaQuery } from "react-responsive";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import AUP from '../../../src/assets/images/logois.png'
function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const [show, setShow] = useState(false);
  const categories = [
    {
      title: "How it works",
      link: "getReal",
    },
    {
      title: "Prepare your iphone",
      link: "organizers",
    },
    {
      title: "FAQ",
      link: "fans",
    },
    {
      title: "Contact Us",
      link: "technology",
    },
    {
      title: "Sell Your Iphone",
      link: "request-demo",
    },
  ];
  return (
    <header className={styles.header}>
      <div
        style={{
          opacity: 1,
        }}
      >
        {(!show || isDesktopOrLaptop) && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
            }}
            src={AUP}
            className={styles.logo}
            alt=""
          />
        )}
      </div>
      <div
        onPress={(e) => {
          // e.tartget
        }}
      >
        {!show && (
          <button className={styles.burger_menu} onClick={() => setShow(true)}>
            <RxHamburgerMenu />
          </button>
        )}

        {show && (
          <div
            className={styles.modal}
            style={{
              positio: "absolute",
              top: 0,
              left: 0,
              opacity: 1,
            }}
          >
            <div
              style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "rgb(0, 0, 0)",
                padding: "2rem 2.5rem",
              }}
            >
              <div
                style={{
                  color: "#fff",
                  lineHeight: 1,
                  fontSize: "2.625rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "2.5rem",
                }}
              >
                <img src={AUP} alt="" className={styles.minilogo} />
                <button
                  onClick={() => setShow(false)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    boxSizing: "border-box",
                    outline: "0px",
                    border: "0px",
                    margin: "0px",
                    cursor: "pointer",
                    userSelect: "none",
                    verticalAlign: "middle",
                    appearance: "none",
                    textDecoration: "none",
                    fontSize: "6px",
                    lineHeight: "1.75",
                    borderRadius: "4px",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    color: "rgb(0, 0, 0)",
                    textTransform: "none",
                    fontWeight: "bold",
                    background: "none",
                    padding: "0px",
                    minWidth: "0px",
                  }}
                >
                  <RxCross1 size={30} color="#fff" />
                </button>
              </div>
              <a className={styles.link} href="#getReal">
                Get Real
              </a>
              <a className={styles.link} href="#organizers">
                Organizers
              </a>
              <a className={styles.link} href="#fans">
                Fans
              </a>
              <a className={styles.link} href="#technology">
                Techology
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={styles.link_container}>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 1,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{ opacity: 1 }}
            className={styles.links}
          >
            {categories.map(({ title, link }, index) => {
              return (
                <a
                  className={
                    index == categories.length - 1
                      ? styles.link_button
                      : styles.link
                  }
                  href={"#" + link}
                >
                  {title}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
