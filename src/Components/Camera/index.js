import React, { useState, useEffect, useContext } from "react";
import { Text, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

import { BarCode } from "../../Context/BarCodeScanner";

import { Container } from "./style";

export default function Camera() {
  const navigation = useNavigation();
  const { handleBarCodeScanned } = useContext(BarCode);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScan = ({ type, data }) => {
    setScanned(true);
    handleBarCodeScanned(data);
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Para acessar a camera precisa aceitar as permissões</Text>;
  }
  if (hasPermission === false) {
    return <Text>Não há acesso para a Camera</Text>;
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleScan}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button
          title={"Click para scanear novamente"}
          onPress={() => handleScan(false)}
        />
      )}
    </Container>
  );
}
