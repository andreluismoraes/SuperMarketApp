import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ContainerValues = styled.View`
  display: flex;
  align-items: flex-end;
  background-color: ${colors.placeholder};
`;

export const ContainerProduct = styled.View`
  flex: 0.1;
  position: relative;
  align-items: flex-start;
`;

export const InfoTotal = styled.Text`
  width: 100%;
  background-color: ${colors.placeholder};
`;

export const BtnAccess = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #5bc0be;
`;

export const BtnText = styled.Text`
  color: #1c2541;
  font-size: 16px;
  font-weight: bold;
`;
