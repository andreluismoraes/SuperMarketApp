import React from "react";
import { useNavigation } from "@react-navigation/native";

/**importando components */
import Button from "../../Components/Button";
import Input from "../../Components/TextInput";

import { Container, Logo } from "./style";

export default function SignUp() {
  const navigation = useNavigation();
  const handleCreateAccount = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Logo source={require("../../../assets/Logo.png")} />
      <Input placeholder="Nome" autoCorrect={false} />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Input placeholder="Senha" secureTextEntry={true} />
      <Button onPress={() => handleCreateAccount()}>Criar Conta</Button>
    </Container>
  );
}
