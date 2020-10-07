import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 48px;
  margin-bottom: 10px;
  border-bottom-color: ${colors.placeholder};
  border-bottom-width: 2;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 5px;
  right: 10px;
  margin-bottom: 15px;
  width: 36px;
  height: 36px;
`;
