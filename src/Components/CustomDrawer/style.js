import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Logo = styled.Image`
  width: 36px;
  height: 36px;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.placeholder};
`;
