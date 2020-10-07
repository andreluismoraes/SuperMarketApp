import React from "react";

import { BtnAccess, BtnText } from "./style";

export default function Button({ children, onPress, ...rest }) {
  return (
    <BtnAccess onPress={onPress} {...rest}>
      <BtnText>{children}</BtnText>
    </BtnAccess>
  );
}
