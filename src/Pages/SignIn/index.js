import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

/**import components */
import Input from "../../Components/TextInput";
import Button from "../../Components/Button";

import { Container, Logo, AppName, TextInfo } from "./style";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();

  const handleAcess = () => {
    navigation.navigate("Home");
  };

  const handleForgetPassword = () => {
    navigation.navigate("RecoveryPassword");
  };

  const handleCriateAccount = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container>
      <AppName>SuperMarketApp</AppName>
      <Logo source={require("../../../assets/Logo.png")} />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Input placeholder="Senha" secureTextEntry={true} />
      <Button onPress={() => handleAcess()}>Acessar</Button>
      <Button onPress={() => handleCriateAccount()}>Criar Conta</Button>
      <TouchableOpacity onPress={() => handleForgetPassword()}>
        <TextInfo>Esqueceu a Senha</TextInfo>
      </TouchableOpacity>
    </Container>
  );
}
