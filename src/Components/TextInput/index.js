import React from "react";

import { Input } from "./style";

export default function TextInput({ onChangeText, ...rest }) {
  return <Input onChangeText={onChangeText} {...rest} />;
}
