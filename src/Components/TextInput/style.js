import styled from "styled-components/native";

import colors from "../../Context/Theme";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#6FFFE9",
})`
  width: 90%;
  height: 36px;
  font-size: 17px;
  margin-bottom: 15px;
  padding: 2px;
  border-radius: 7px;
  color: ${colors.placeholder};
  background-color: #1c2541;
`;
