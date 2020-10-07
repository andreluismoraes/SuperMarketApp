import React from "react";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Container, Logo } from "./style";

import { Entypo } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();

  const handleToogle = () => {
    navigation.toggleDrawer();
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => handleToogle()}>
        <Entypo name="menu" size={42} color="white" />
      </TouchableOpacity>

      <Logo source={require("../../../assets/Logo.png")} />
    </Container>
  );
}
