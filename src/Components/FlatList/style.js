import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  flex: 1;
`;

export const ListItem = styled.TouchableOpacity`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #f9c2ff;
  padding: 5px;
  margin: 5px 0;
`;

export const Icon = styled.View`
  display: flex;
  flex-direction: row;
  width: 70px;
  justify-content: space-between;
  position: absolute;
  right: 0;
`;

export const Title = styled.Text`
  font-size: 14px;
`;

export const InfoTotal = styled.Text`
  background-color: ${colors.placeholder};
`;
