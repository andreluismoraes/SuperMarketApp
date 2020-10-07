import React, { useContext, useState } from "react";
import { FlatList } from "react-native";

import { Container, ListItem, Title, Icon } from "./style";

import { CarContext } from "../../Context/BuyContext";

import shortText from "../../Utils";

import { AntDesign } from "@expo/vector-icons";

const Item = ({ item, onLongPress }) => {
  const { state, dispatch } = useContext(CarContext);

  const handleAddQtd = (productQtd) => {
    productQtd.qtd++;
    productQtd.subtotal = productQtd.qtd * productQtd.price;
    dispatch({ type: "addQtd" });
  };

  const handleSubQtd = (productQtd) => {
    if (productQtd.qtd > 1) {
      productQtd.qtd--;
      productQtd.subtotal = productQtd.qtd * productQtd.price;
      dispatch({ type: "addQtd" });
    }
  };

  return (
    <ListItem onLongPress={onLongPress}>
      <Title>
        {shortText(item.title)} - R${item.price.toFixed(2)} - QTD:{item.qtd}{" "}
        Subt: {item.subtotal.toFixed(2)}
      </Title>
      <Icon>
        <AntDesign
          name="plus"
          size={24}
          color="black"
          onPress={() => handleAddQtd(item)}
        />
        <AntDesign
          name="minus"
          size={24}
          color="black"
          onPress={() => handleSubQtd(item)}
        />
      </Icon>
    </ListItem>
  );
};

const Flat = ({ Data }) => {
  const { dispatch } = useContext(CarContext);

  const handleLongClick = (id) => {
    dispatch({ type: "remove", id: id });
  };

  const renderItem = ({ item }) => (
    <Item item={item} onLongPress={() => handleLongClick(item.id)} />
  );

  return (
    <Container>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default Flat;
