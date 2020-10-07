const shortText = (texto) => {
  const result = texto.length > 7 ? `${texto.substring(0, 7)}...` : texto;
  return result;
};

export default shortText;
