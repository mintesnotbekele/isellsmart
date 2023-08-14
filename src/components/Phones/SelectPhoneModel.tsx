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
        img: "14.png",
      },
      {
        name: "iPhone 14 Pro",
        slug: "iphone-14-pro",
        img: "14.png",
      },
      {
        name: "iPhone 13 Pro Max",
        slug: "iphone-13-pro-max",
        img: "Iphone 13.png",
      },
      {
        name: "iPhone 14 Plus",
        slug: "iphone-14-plus",
        img: "14.png",
      },
      {
        name: "iPhone 14",
        slug: "iphone-14",
        img: "14.png",
      },
      {
        name: "iPhone 13 Pro",
        slug: "iphone-13-pro",
        img: "Iphone 13.png",
      },
      {
        name: "iPhone 13",
        slug: "iphone-13",
        img: "Iphone 13.png",
      },
      {
        name: "iPhone 12 Pro Max",
        slug: "iphone-12-pro-max",
        img: "12 .png",
      },
      {
        name: "iPhone 12 Pro",
        slug: "iphone-12-pro",
        img: "12 .png",
      },
      {
        name: "iPhone 12",
        slug: "iphone-12",
        img: "12 .png",
      },
      {
        name: "iPhone 12 Mini",
        slug: "iphone-12-mini",
        img: "12 .png",
      },
      {
        name: "iPhone 11 Pro Max",
        slug: "iphone-11-pro-max",
        img: "11.jpeg",
      },
      {
        name: "iPhone 11 Pro",
        slug: "iphone-11-pro",
        img: "11.jpeg",
      },
      {
        name: "iPhone 11",
        slug: "iphone-11",
        img: "11.jpeg",
      },
      {
        name: "iPhone XS Max",
        slug: "iphone-xs-max",
        img: "Iphone X.png",
      },
      {
        name: "iPhone XS",
        slug: "iphone-xs",
        img: "Iphone X.png",
      },
      {
        name: "iPhone XR",
        slug: "iphone-xr",
        img: "Iphone X.png",
      },
      {
        name: "iPhone X",
        slug: "iphone-x",
        img: "Iphone X.png",
      },
      {
        name: "iPhone 8 Plus",
        slug: "iphone-8-plus",
        img: "Iphone 8.png",
      },
      {
        name: "iPhone 8",
        slug: "iphone-8",
        img: "Iphone 8.png",
      },
      {
        name: "iPhone 7 Plus",
        slug: "iphone-7-plus",
        img: "Iphone 7.png",
      },
      {
        name: "iPhone 7",
        slug: "iphone-7",
        img: "Iphone 7.png",
      },
      {
        name: "iPhone 6s Plus",
        slug: "iphone-6s-plus",
        img: "6s plus.png",
      },
      {
        name: "iPhone 6s",
        slug: "iphone-6s",
        img: "6s plus.png",
      },
      {
        name: "iPhone 6",
        slug: "iphone-6",
        img: "6s plus.png",
      },
      {
        name: "iPhone SE 3rd Gen",
        slug: "iphone-se-3rd-gen",
        img: "se.png",
      },
      {
        name: "iPhone SE 2nd Gen",
        slug: "iphone-se-2nd-gen",
        img: "se.png",
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
        Which Model Do You Have ?
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
