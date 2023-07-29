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
    () => ["AT&T", "T-Mobile", "Verizon", "Unlocked", "Other"],
    []
  );

  return (
    <div>
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
            justifyContent: "center",
          }}
        >
          {carriers.map((carrier) => {
            return (
              <div
                onClick={() => {
                  setCarrier(carrier);
                }}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="ata.png"
                  style={{
                    objectFit: "contain",
                    width: "150px",
                  }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  {carrier}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
