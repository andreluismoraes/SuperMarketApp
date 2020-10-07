import colors from "../../Context/Theme";

import styled from "styled-components/native";

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

export const AppName = styled.Text`
  color: ${colors.placeholder};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 48px;
`;

export const TextInfo = styled(AppName)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
