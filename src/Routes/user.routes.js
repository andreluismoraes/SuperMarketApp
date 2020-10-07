import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../Components/CustomDrawer";

import colors from "../Context/Theme";

/**importando paginas */
import Home from "../Pages/Home";
import Produtos from "../Pages/Produtos";
import Supermercado from "../Pages/Supermercado";
import Compras from "../Pages/Compras";

export default function UserRoutes() {
  const DrawerStyle = {
    backgroundColor: `${colors.background}`,
  };

  const DrawerContentOptions = {
    labelStyle: {
      fontWeight: "bold",
    },
    activeTintColor: `${colors.placeholder}`,
    activeBackgroundColor: `${colors.text}`,
    inactiveBackgroundColor: `${colors.background}`,
    inactiveTintColor: `${colors.text}`,
    itemStyle: {
      marginVertical: 5,
    },
  };

  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={DrawerStyle}
      drawerContentOptions={DrawerContentOptions}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen name="Supermercado" component={Supermercado} />
      <Drawer.Screen name="Compras" component={Compras} />
    </Drawer.Navigator>
  );
}
