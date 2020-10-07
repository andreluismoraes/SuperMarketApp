import React from "react";
import { StatusBar, LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import ContextBarCode from "./src/Context/BarCodeScanner";

import CarProvider from "./src/Context/BuyContext";

LogBox.ignoreAllLogs();

/**Import Route */
import Routes from "./src/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <ContextBarCode>
        <CarProvider>
          <Routes />
        </CarProvider>
      </ContextBarCode>
    </NavigationContainer>
  );
}
