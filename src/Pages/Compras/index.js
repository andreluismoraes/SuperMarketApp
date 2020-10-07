import React, { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import { BarCode } from "../../Context/BarCodeScanner";

/** importando components*/
import Header from "../../Components/Header";
import FlatList from "../../Components/FlatList";
import Input from "../../Components/TextInput";

import api from "../../Api";

import {
  Container,
  ContainerProduct,
  InfoTotal,
  BtnText,
  BtnAccess,
  ContainerValues,
} from "./style";

import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { CarContext } from "../../Context/BuyContext";

export default function Compras() {
  const navigation = useNavigation();
  const [code, setCode] = useState(null);
  const { barCode, setBarCode } = useContext(BarCode);
  const { state, dispatch } = useContext(CarContext);

  useEffect(() => {
    setCode(barCode);
  }, [barCode]);

  const clean = () => {
    setBarCode("");
    setCode("");
  };

  const handleIncludeItem = () => {
    const simpleProduct = api.filter((item) => item.id === code);

    if (simpleProduct.length > 0) {
      const quantidade = { qtd: 1 };
      const subtotal = { subtotal: simpleProduct[0].price * quantidade.qtd };
      const agrega = { ...simpleProduct[0], ...quantidade, ...subtotal };
      dispatch({ type: "addItemCar", product: agrega });
    } else {
      Alert.alert("Atenção", "Deseja Cadastrar este produto", [
        { text: "Sim", onPress: () => navigation.navigate("Produtos") },
        {
          text: "Não",
          onPress: () => {
            style: "cancel";
          },
        },
      ]);
    }

    clean();
  };

  const handleFinish = () => {
    Alert.alert("Atenção", "Deseja Finalizar a compra?", [
      { text: "Sim", onPress: () => dispatch({ type: "finish" }) },
      {
        text: "Não",
        onPress: () => {
          style: "cancel";
        },
      },
    ]);
  };

  const handleScan = () => {
    navigation.navigate("Camera");
  };

  return (
    <Container>
      <Header />
      <ContainerProduct>
        <Input
          keyboardType="number-pad"
          style={{ width: 250 }}
          value={code}
          onChangeText={(text) => setCode(text)}
        />
        <FontAwesome
          name="barcode"
          size={40}
          color="white"
          style={{ position: "absolute", top: 0, left: 260 }}
          onPress={() => handleScan()}
        />
        <Entypo
          name="shopping-cart"
          size={40}
          color="white"
          style={{ position: "absolute", top: 0, left: 310 }}
          onPress={() => handleIncludeItem()}
        />
      </ContainerProduct>

      <ContainerValues>
        <InfoTotal>
          Valor da Compra: R$
          {state.cart
            .reduce((prev, next) => prev + next.subtotal, 0)
            .toFixed(2)}
        </InfoTotal>
        <BtnAccess onPress={() => handleFinish()}>
          <BtnText>Finalizar Compra</BtnText>
        </BtnAccess>
      </ContainerValues>

      <FlatList Data={state.cart} />
    </Container>
  );
}

// {state.carrinho.reduce((prev, next) => prev + next.price, 0)}
