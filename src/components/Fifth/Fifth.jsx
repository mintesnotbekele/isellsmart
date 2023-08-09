import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./fifth.module.css";
import laptopFold from "../../assets/images/laptop-fold.9a336450.png";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Fifth() {
  return (
    <div id="organizers" className={styles.container}>
      <div
        style={{
          width: "100%",
          maxWidth: "max(1600px, 90%)",
        }}
      >
        <div className={styles.top_container}>
          <div
            style={{
              opacity: 1,
            }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={styles.header}
            >
              All the reasons to trade in with iCellSmart. Including one very
              big.
              <br />
              <span>You'll never miss a work with iCellSmart</span>
              <h5>Trust & Transparency</h5>
              <h5>Trade in Price - Promise</h5>
            </motion.h2>
            <ul
              style={{
                listStyleType: "circle",
                fontSize: "1.6rem",
                padding: "0 0 127px 88px",
              }}
            >
              <li>We're Mobile, cash on-the-go </li>
              <li>Fast & Reliable ⚡️</li>
              <li>
                Time/Location/Schedules at your Conenience We’ll work on your
                schedule
              </li>
              <li>Its super easy, Get a Click Quote Now</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom_container}>
          <div className={styles.bottom_wrapper}>
            <Swiper
              style={{
                height: 200,
                display: "flex",
              }}
              spaceBetween={30}
              centeredSlides={true}
              // autoplay={{
              //   reverseDirection: false,
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              autoplay={false}
              sid
              pagination={{
                clickable: true,
              }}
              navigation={true}
            >
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.fifth_slide_p}>
                  <span>Sell Your Iphone.</span>
                  <br></br>
                  Hand in your old phone Get cash in hand. It’s really that easy
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.fourth_slide_p}>
                  <span>Attendance Tracking</span>
                  <br />
                  Keep track of your attendance and never miss a class.
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.third_slide_p}>
                  <span>Fee Managment</span>
                  <br />
                  Easily manage and pay your fees, View your payment history,and
                  stay on top of deadlines
                </p>
              </SwiperSlide>
              <SwiperSlide className={styles.slide_item}>
                <p className={styles.first_slide_p}>
                  <span>Club Participation</span>
                  <br />
                  participate in a club activities and events that interest
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <img
            src={laptopFold}
            style={{
              width: "37%",
              marginBottom: "40px",
              objectFit: "contain",
              maxWidth: 400,
              backgroundSize: "100%",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
