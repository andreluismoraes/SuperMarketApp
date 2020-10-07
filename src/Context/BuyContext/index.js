import React, { createContext, useReducer } from "react";

import reduce from "../../Reduces";

export const CarContext = createContext({});

const initialTotal = { cart: [] };

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialTotal);
  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
