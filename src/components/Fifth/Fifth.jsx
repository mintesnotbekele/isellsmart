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
              style={{
                textAlign: "center",
                margin: "auto",
                paddingTop: "100px",
              }}
            >
              <br />
              <span>You'll never miss a work with iCellSmart</span>
              <br />
              <br />
              <h5 className={styles.bullets}>Fast & Reliable</h5>
              <br />
              <h5 style={{ margin: "0px" }}>Trust & Transparency</h5>
              <br />
              <h5 style={{ margin: "0px" }}>Trade in Price - Promise</h5>
              <br />
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={styles.bullets}
              style={{ margin: "auto" }}
            >
              <h5 className={styles.bullets}>We're Mobile, cash on-the-go </h5>
              <br />
              <h5 className={styles.bullets}>
                Its super easy, Get a Click Quote Now
              </h5>
              <br />
              <h5 className={styles.bullets}>
                Time/Location/Schedules at your Convenience
              </h5>
            </motion.h2>
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
                  <span>Join our Partnership.</span>
                  <br></br>
                  Refer friends and family and receive up to $25 per device
                  trade in.
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
