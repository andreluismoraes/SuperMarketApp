import React from "react";

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { useNavigation } from "@react-navigation/native";

import { Container, Logo, TextInfo } from "./style";

export default function CustomDrawer(props) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate("SignIn");
  };

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Logo source={require("../../../assets/Logo.png")} />
        <TextInfo>SuperMarketApp</TextInfo>
      </Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label="Sair do app"
        inactiveBackgroundColor="#1C2541"
        onPress={() => handleSignOut()}
      />
    </DrawerContentScrollView>
  );
}

/**
#0B132B - background
#5BC0BE - Buttons
#1C2541 - ButtonsText
#6FFFE9 - Placeholder
#3A506B - text
*/
