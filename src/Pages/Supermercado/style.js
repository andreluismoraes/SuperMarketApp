import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ContainerSuper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;
