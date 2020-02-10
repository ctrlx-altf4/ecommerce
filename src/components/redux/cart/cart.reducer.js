import CartActionTypes from "./cart.types";
import { addItemToCart, clearItemFromCart,reduceItemFromCart} from "./cart.utils";

const INITIAL_VALUES = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_VALUES, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return{
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REDUCE_ITEM:
      return{
        ...state,
        cartItems: reduceItemFromCart(state.cartItems,action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
