import styled, { css } from "styled-components/native";

export const BtnAccess = styled.TouchableOpacity`
  width: 50%;
  height: 45px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  background-color: #5bc0be;

  ${(props) =>
    props.primary &&
    css`
      width: 120px;
      height: 20px;
    `}
`;

export const BtnText = styled.Text`
  color: #1c2541;
  font-size: 26px;
  font-weight: bold;
`;
