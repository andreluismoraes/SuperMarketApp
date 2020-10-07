import React, { createContext, useState } from "react";

export const BarCode = createContext({});

export default function ContextBarCode({ children }) {
  const [barCode, setBarCode] = useState(null);

  const handleBarCodeScanned = (data) => {
    setBarCode(data);
  };

  return (
    <BarCode.Provider value={{ handleBarCodeScanned, barCode, setBarCode }}>
      {children}
    </BarCode.Provider>
  );
}
