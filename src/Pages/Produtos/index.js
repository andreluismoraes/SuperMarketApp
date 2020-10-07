import React, { useContext } from "react";

import Header from "../../Components/Header";
import Input from "../../Components/TextInput";
import Button from "../../Components/Button";

import { Container, TextInfo, BarCodeView } from "./style";

import { BarCode } from "../../Context/BarCodeScanner";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function Produtos() {
  const { barCode, handleBarCodeScanned } = useContext(BarCode);

  const navigation = useNavigation();

  const handleGetBarCode = () => {
    navigation.navigate("Camera");
  };

  const handleCadastrar = () => {
    navigation.navigate("Home");
  };

  const handleCompras = () => {
    navigation.navigate("Compras");
  };

  return (
    <Container>
      <Header />
      <TextInfo>Cadastrar Produtos</TextInfo>
      <Input placeholder="Nome" autoCorrect={false} />
      <Input
        placeholder="Valor"
        autoCorrect={false}
        keyboardType="number-pad"
      />
      <BarCodeView>
        <Input
          style={{ position: "relative" }}
          placeholder="Cógido de Barras"
          autoCorrect={false}
          keyboardType="number-pad"
          onChangeText={(text) => handleBarCodeScanned(text)}
          value={barCode}
        />
        <Button
          onPress={() => handleGetBarCode()}
          style={{
            position: "absolute",
            width: 50,
            right: 10,
          }}
        >
          <MaterialCommunityIcons name="barcode" size={36} color="black" />
        </Button>
      </BarCodeView>

      <Button onPress={() => handleCadastrar()}>Cadastrar</Button>
      <Button onPress={() => handleCompras()}>Compras</Button>
    </Container>
  );
}
