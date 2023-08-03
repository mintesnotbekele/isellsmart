//@ts-nocheck
import styles from "./selectcarrier.module.css";

import React, { useMemo } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

let imgKey = {
  "iPhone 14 Pro Max": "14promax.jpeg",
  "iPhone 14 Pro": "14pro.jpeg",
  "iPhone 13 Pro Max": "13promax.jpeg",
  "iPhone 14 Plus": "14plus.jpeg",
  "iPhone 14": "14.jpeg",
  "iPhone 13 Pro": "13pro.jpeg",
  "iPhone 13": "13.jpeg",
  "iPhone 12 Pro Max": "12promax.jpeg",
  "iPhone 12 Pro": "12pro.jpeg",
  "iPhone 12": "12.jpeg",
  "iPhone 12 Mini": "12mini.jpeg",
  "iPhone 11 Pro Max": "11promax.jpeg",
  "iPhone 11 Pro": "11pro.jpeg",
  "iPhone 11": "11.jpeg",
  "iPhone XS Max": "xsmax.jpeg",
  "iPhone XS": "xs.jpeg",
  "iPhone XR": "xr.jpeg",
  "iPhone X": "x.jpeg",
  "iPhone 8 Plus": "8plus.jpeg",
  "iPhone 8": "8.jpeg",
  "iPhone 7 Plus": "7plus.jpeg",
  "iPhone 7": "7.jpeg",
  "iPhone 6s Plus": "6splus.jpeg",
  "iPhone 6s": "6s.jpeg",
  "iPhone 6": "6.jpeg",
  "iPhone SE 3rd Gen": "se3rdgen.jpeg",
  "iPhone SE 2nd Gen": "se2ndgen.jpeg",
};
export default function SelectPhoneStorage({
  setPhoneModel,
  setCarrier,
  phoneModel,
  carrier,
}: {
  setPhoneModel: React.Dispatch<React.SetStateAction<string>>;
  setCarrier: React.Dispatch<React.SetStateAction<string>>;
  phoneModel: string;
  carrier: string;
}) {
  const navigate = useNavigate();
  const phoneStorage = useMemo(
    () => [
      `${phoneModel} 64GB (AT&T)`,
      `${phoneModel} 128GB (AT&T)`,
      `${phoneModel} 256GB (AT&T)`,
      `${phoneModel} 512GB (AT&T)`,
    ],
    []
  );
  return (
    <div
      className={styles.contanier}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          fontSize: "1.5rem",
        }}
      >
        <p
          style={{
            color: "white",
            width: "max-content",
            display: "flex",
            gap: "10px",
            padding: "5px 10px",
          }}
        >
          {phoneModel}
        </p>
        <button
          onClick={() => {
            setPhoneModel("");
            setCarrier("");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <BsPencilSquare />
          <span>Change Model</span>
        </button>
      </div>
      <hr
        style={{
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          fontSize: "1.5rem",
        }}
      >
        <p
          style={{
            color: "white",
            width: "max-content",
            display: "flex",
            gap: "10px",
            padding: "5px 10px",
          }}
        >
          {carrier}
        </p>
        <button
          onClick={() => {
            setCarrier("");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <BsPencilSquare />
          <span>change carrier</span>
        </button>
      </div>
      <hr
        style={{
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {phoneStorage.map((storage) => {
          return (
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={"iphone/" + imgKey[phoneModel]}
                style={{
                  objectFit: "contain",
                  width: "20vw",
                  maxWidth: "200px",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                {storage}
              </p>
              <button
                onClick={() => {
                  navigate("/form", {
                    state: {
                      phoneModel,
                      carrier,
                      storage,
                    },
                  });
                }}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  fontSize: "1.2rem",
                  border: "none",
                  padding: "1vw 1.2vw",
                  borderRadius: "10px",
                }}
              >
                Get Offer
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
