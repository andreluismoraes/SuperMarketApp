import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
  width: 90px;
  height: 90px;
`;
