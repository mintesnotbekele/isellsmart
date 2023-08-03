//@ts-nocheck
import styles from "./selectcarrier.module.css";

import React, { Dispatch, SetStateAction, useMemo } from "react";
export default function SelectPhoneModel({
  phoneModel,
  setPhoneModel,
}: {
  phoneModel: string;
  setPhoneModel: Dispatch<SetStateAction<string>>;
}) {
  const phones = useMemo(
    () => [
      {
        name: "iPhone 14 Pro Max",
        slug: "iphone-14-pro-max",
        img: "14promax.jpeg",
      },
      {
        name: "iPhone 14 Pro",
        slug: "iphone-14-pro",
        img: "14pro.jpeg",
      },
      {
        name: "iPhone 13 Pro Max",
        slug: "iphone-13-pro-max",
        img: "13promax.jpeg",
      },
      {
        name: "iPhone 14 Plus",
        slug: "iphone-14-plus",
        img: "14plus.jpeg",
      },
      {
        name: "iPhone 14",
        slug: "iphone-14",
        img: "14.jpeg",
      },
      {
        name: "iPhone 13 Pro",
        slug: "iphone-13-pro",
        img: "13pro.jpeg",
      },
      {
        name: "iPhone 13",
        slug: "iphone-13",
        img: "13.jpeg",
      },
      {
        name: "iPhone 12 Pro Max",
        slug: "iphone-12-pro-max",
        img: "12promax.jpeg",
      },
      {
        name: "iPhone 12 Pro",
        slug: "iphone-12-pro",
        img: "12pro.jpeg",
      },
      {
        name: "iPhone 12",
        slug: "iphone-12",
        img: "12.jpeg",
      },
      {
        name: "iPhone 12 Mini",
        slug: "iphone-12-mini",
        img: "12mini.jpeg",
      },
      {
        name: "iPhone 11 Pro Max",
        slug: "iphone-11-pro-max",
        img: "11promax.jpeg",
      },
      {
        name: "iPhone 11 Pro",
        slug: "iphone-11-pro",
        img: "11pro.jpeg",
      },
      {
        name: "iPhone 11",
        slug: "iphone-11",
        img: "11.jpeg",
      },
      {
        name: "iPhone XS Max",
        slug: "iphone-xs-max",
        img: "xsmax.jpeg",
      },
      {
        name: "iPhone XS",
        slug: "iphone-xs",
        img: "xs.jpeg",
      },
      {
        name: "iPhone XR",
        slug: "iphone-xr",
        img: "xr.jpeg",
      },
      {
        name: "iPhone X",
        slug: "iphone-x",
        img: "x.jpeg",
      },
      {
        name: "iPhone 8 Plus",
        slug: "iphone-8-plus",
        img: "8plus.jpeg",
      },
      {
        name: "iPhone 8",
        slug: "iphone-8",
        img: "8.jpeg",
      },
      {
        name: "iPhone 7 Plus",
        slug: "iphone-7-plus",
        img: "7plus.jpeg",
      },
      {
        name: "iPhone 7",
        slug: "iphone-7",
        img: "7.jpeg",
      },
      {
        name: "iPhone 6s Plus",
        slug: "iphone-6s-plus",
        img: "6splus.jpeg",
      },
      {
        name: "iPhone 6s",
        slug: "iphone-6s",
        img: "6s.jpeg",
      },
      {
        name: "iPhone 6",
        slug: "iphone-6",
        img: "6.jpeg",
      },
      {
        name: "iPhone SE 3rd Gen",
        slug: "iphone-se-3rd-gen",
        img: "se3rdgen.jpeg",
      },
      {
        name: "iPhone SE 2nd Gen",
        slug: "iphone-se-2nd-gen",
        img: "se2ndgen.jpeg",
      },
    ],
    []
  );
  return (
    <div className={styles.contanier} id="request-demo">
      <h6
        style={{
          fontSize: "1.8rem",
          marginLeft: "5%",
          textAlign: "center",
        }}
      >
        Which Model Dou You Have ?
      </h6>
      <div
        style={{
          padding: "0 6vw",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {phones.map((phone, index) => {
          return (
            <div
              onClick={() => {
                setPhoneModel(phone.name);
              }}
              key={phone.slug}
              style={{
                cursor: "pointer",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                minWidth: "50px",
                maxWidth: "130px",
                flexDirection: "column",
              }}
            >
              <img
                src={`iphone/${phone.img}`}
                style={{
                  width: "100%",
                  height: "200px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                {phone.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
