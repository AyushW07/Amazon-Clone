export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

// console.log(getCartTotal);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }

      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    //! Below code removes all the products with same ids thats why we implemented above code
    // return {
    //   ...state,
    //   cart: state.cart.filter((item) => item.id !== action.id),
    // };

    default:
      return state;
  }
};

export default reducer;
