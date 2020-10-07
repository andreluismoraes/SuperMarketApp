import React from "react";

/** importando components*/
import Header from "../../Components/Header";
import Button from "../../Components/Button";

import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

import { Container } from "./style";

export default function Home() {
  const navigation = useNavigation();

  const handleBuy = () => {
    navigation.navigate("Compras");
  };

  const handleSuper = () => {
    navigation.navigate("Supermercado");
  };

  const handleProduct = () => {
    navigation.navigate("Produtos");
  };

  return (
    <Container>
      <Header />
      <Button onPress={() => handleSuper()}>Cad Super</Button>
      <Button onPress={() => handleBuy()}>
        Compras
        <Entypo name="shopping-cart" size={28} color="white" />
      </Button>

      <Button onPress={() => handleProduct()}>Cad Prod</Button>
    </Container>
  );
}
