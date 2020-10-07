const reduce = (state, action) => {
  switch (action.type) {
    case "addItemCar":
      return { ...state, cart: [...state.cart, action.product] };
    case "remove":
      let newCart = [];
      newCart = state.cart.filter((item) => item.id !== action.id);
      return { ...state, cart: newCart };
    case "addQtd":
      return { ...state };
    case "finish":
      const finish = [];
      return { ...state, cart: finish };
    default:
      return state;
  }
};

export default reduce;
