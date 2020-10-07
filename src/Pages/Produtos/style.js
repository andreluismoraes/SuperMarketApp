import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const TextInfo = styled.Text`
  color: ${colors.placeholder};
  font-weight: bold;
  font-size: 16px;
`;

export const BarCodeView = styled.View`
  display: flex;
  flex-direction: row;
`;
