import React from "react";

/**importando components */
import Header from "../../Components/Header";
import Input from "../../Components/TextInput";
import Button from "../../Components/Button";

import { useNavigation } from "@react-navigation/native";

import { Container, TextInfo, ContainerSuper } from "./style";

export default function Supermercado() {
  const navigation = useNavigation();
  const handleToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <Container>
      <Header />
      <ContainerSuper>
        <TextInfo>Cadastrar Supermercado</TextInfo>
        <Input placeholder="Nome do Supermercado" />
        <TextInfo>Endereço</TextInfo>
        <Input placeholder="Endereço" />
        <Input placeholder="Numero" keyboardType="number-pad" />
        <Input placeholder="Cidade" />
        <Button onPress={() => handleToHome()}>Cadastrar</Button>
      </ContainerSuper>
    </Container>
  );
}
