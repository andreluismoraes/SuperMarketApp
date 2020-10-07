import React from "react";
import { useNavigation } from "@react-navigation/native";

/**importando componentes */
import Button from "../../Components/Button";
import Input from "../../Components/TextInput";

import { Container, Logo } from "./style";

export default function RecoveryPassword() {
  const navigation = useNavigation();

  const handleRecoveryEmail = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Container>
      <Logo source={require("../../../assets/Logo.png")} />
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <Button onPress={() => handleRecoveryEmail()}>Enviar</Button>
    </Container>
  );
}
