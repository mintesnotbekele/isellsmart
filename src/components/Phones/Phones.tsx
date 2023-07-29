import React, { useMemo, useState } from "react";
import SelectPhoneModel from "./SelectPhoneModel";
import SelectPhoneStorage from "./SelectPhoneStorage";
import SelectCarrier from "./SelectCarrier";
function Phones() {
  const [phoneModel, setPhoneModel] = useState<string>("");
  const [carrier, setCarrier] = useState<string>("");
  if (!phoneModel) {
    return (
      <SelectPhoneModel setPhoneModel={setPhoneModel} phoneModel={phoneModel} />
    );
  }
  if (phoneModel && !carrier) {
    return (
      <SelectCarrier
        setPhoneModel={setPhoneModel}
        phoneModel={phoneModel}
        setCarrier={setCarrier}
      />
    );
  }
  if (phoneModel && carrier) {
    return (
      <SelectPhoneStorage
        carrier={carrier}
        phoneModel={phoneModel}
        setCarrier={setCarrier}
        setPhoneModel={setPhoneModel}
      />
    );
  }

  return null;
}

export default Phones;
