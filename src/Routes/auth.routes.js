import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

/**Import Pages */
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import RecoveryPassword from "../Pages/RecoveryPassword";
import Camera from "../Components/Camera";
import Supermercado from "../Pages/Supermercado";

/**importando drawer */
import Drawer from "./user.routes";

import colors from "../Context/Theme";

export default function AuthRoutes() {
  const Stack = createStackNavigator();

  const BackHader = {
    headerStyle: {
      backgroundColor: `${colors.background}`,
      borderBottomWidth: 3,
      borderBottomColor: "#5BC0BE",
    },
    headerTintColor: `${colors.placeholder}`,
    headerBackTitleVisible: false,
    headerTitle: "Voltar",
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} options={BackHader} />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={BackHader}
      />
      <Stack.Screen name="Camera" component={Camera} options={BackHader} />
      <Stack.Screen
        name="Supermercado"
        component={Supermercado}
        options={BackHader}
      />
      <Stack.Screen
        name="Home"
        component={Drawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
