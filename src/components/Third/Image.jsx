import React from "react";
import { useMediaQuery } from "react-responsive";
function Image({ path }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 900px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return (
    <img
      src={path}
      // className={styles.image}
      style={{
        objectFit: "contain",
        top: -5,
        right: 50,
        position: "absolute",
        ...(isDesktopOrLaptop && {
          width: 250,
          height: 300,
          right: 0,
        }),
        ...(isMobile && {
          width: 200,
          height: 220,
          right: -10,
        }),
      }}
      alt=""
    />
  );
}

export default Image;
