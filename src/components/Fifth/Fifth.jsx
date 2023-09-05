import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./fifth.module.css";
import laptopFold from "/iPhone-11-PNG-Photo.png";
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
        <div className={styles.bottom_container}>
          <div className={styles.bottom_wrapper}>
            <Swiper
              style={{
                height: 200,
                display: "flex",
              }}
              spaceBetween={30}
              centeredSlides={true}
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
