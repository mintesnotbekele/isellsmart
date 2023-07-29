import React, { useMemo } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
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
      "iPhone 14 Pro 128GB (AT&T)",
      "iPhone 14 Pro 256GB (AT&T)",
      "iPhone 14 Pro 512GB (AT&T)",
      "iPhone 14 Pro 1TB (AT&T)",
    ],
    []
  );
  return (
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
          onClick={() => {
            setPhoneModel("");
            setCarrier("");
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <BsPencilSquare color="#fff" />
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
          <BsPencilSquare color="#fff" />
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
                src="iphone.jpeg"
                style={{
                  objectFit: "contain",
                  width: "300px",
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
                  padding: "10px 20px",
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
