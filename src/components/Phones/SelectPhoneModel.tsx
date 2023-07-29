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
      },
      {
        name: "iPhone 14 Pro",
        slug: "iphone-14-pro",
      },
      {
        name: "iPhone 13 Pro Max",
        slug: "iphone-13-pro-max",
      },
      {
        name: "iPhone 14 Plus",
        slug: "iphone-14-plus",
      },
      {
        name: "iPhone 14",
        slug: "iphone-14",
      },
      {
        name: "iPhone 13 Pro",
        slug: "iphone-13-pro",
      },
      {
        name: "iPhone 13",
        slug: "iphone-13",
      },
      {
        name: "iPhone 12 Pro Max",
        slug: "iphone-12-pro-max",
      },
      {
        name: "iPhone 12 Pro",
        slug: "iphone-12-pro",
      },
      {
        name: "iPhone 12",
        slug: "iphone-12",
      },
      {
        name: "iPhone 12 Mini",
        slug: "iphone-12-mini",
      },
      {
        name: "iPhone 11 Pro Max",
        slug: "iphone-11-pro-max",
      },
      {
        name: "iPhone 11 Pro",
        slug: "iphone-11-pro",
      },
      {
        name: "iPhone 11",
        slug: "iphone-11",
      },
      {
        name: "iPhone XS Max",
        slug: "iphone-xs-max",
      },
      {
        name: "iPhone XS",
        slug: "iphone-xs",
      },
      {
        name: "iPhone XR",
        slug: "iphone-xr",
      },
      {
        name: "iPhone X",
        slug: "iphone-x",
      },
      {
        name: "iPhone 8 Plus",
        slug: "iphone-8-plus",
      },
      {
        name: "iPhone 8",
        slug: "iphone-8",
      },
      {
        name: "iPhone 7 Plus",
        slug: "iphone-7-plus",
      },
      {
        name: "iPhone 7",
        slug: "iphone-7",
      },
      {
        name: "iPhone 6s Plus",
        slug: "iphone-6s-plus",
      },
      {
        name: "iPhone 6s",
        slug: "iphone-6s",
      },
      {
        name: "iPhone 6 Plus",
        slug: "iphone-6-plus",
      },
      {
        name: "iPhone 6",
        slug: "iphone-6",
      },
      {
        name: "iPhone SE 3rd Gen",
        slug: "iphone-se-3rd-gen",
      },
      {
        name: "iPhone SE 2nd Gen",
        slug: "iphone-se-2nd-gen",
      },
    ],
    []
  );
  return (
    <div>
      <h6
        style={{
          fontSize: "1.8rem",
          marginLeft: "5%",
        }}
      >
        Which Model Dou You Have ?
      </h6>
      <div
        style={{
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
                flexDirection: "column",
              }}
            >
              <img src="iphone.jpeg" />
              <p
                style={{
                  fontSize: "20px",
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
