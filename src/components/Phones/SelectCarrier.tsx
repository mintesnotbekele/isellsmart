//@ts-nocheck
import styles from "./selectcarrier.module.css";

import React, { useMemo } from "react";
import { BsPencilSquare } from "react-icons/bs";
export default function SelectCarrier({
  setPhoneModel,
  phoneModel,
  setCarrier,
}: {
  setPhoneModel: React.Dispatch<React.SetStateAction<string>>;
  phoneModel: string;
  setCarrier: React.Dispatch<React.SetStateAction<string>>;
}) {
  const carriers = useMemo(
    () => [
      {
        title: "AT&T",
        img: "ata.png",
      },
      {
        title: "T-Mobile",
        img: "tmobile.png",
      },
      {
        title: "Sprint",
        img: "sprint.png",
      },
      {
        title: "Verizon",
        img: "verizon.png",
      },
      {
        title: "Unlocked",
        img: "locked.png",
      },
      {
        title: "Other",
        img: "other.png",
      },
    ],
    []
  );

  return (
    <div className={styles.contanier}>
      <div
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
            onClick={() => setPhoneModel("")}
            className={styles.button}
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
        <h6
          style={{
            fontSize: "1.8rem",
            marginTop: 0,
            marginBottom: 30,
            marginLeft: "20%",
          }}
        >
          Select Carrier
        </h6>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {carriers.map((carrier) => {
            return (
              <div
                onClick={() => {
                  setCarrier(carrier.title);
                }}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={carrier.img}
                  style={{
                    width: "150px",
                    height: "80px",
                  }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  {carrier.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
