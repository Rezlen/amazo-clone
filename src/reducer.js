//reducer sends the date to: dataLayer > React Context API/Redux

import { returnTrue } from "react-currency-format/lib/utils";

export const initialState = {
  basket: [],
  user: null
};

// Selector function here. This sends the Basket amount to the SUBTOTAL.JS page an displays on basket area
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
        // using the index causes that all item with the same ID does not get removed, instead that item only will be removed
      if (index >= 0) {
        {/*newBasket.splice(index.newBasket, 1);*/}
        newBasket.splice(action.basketIndex, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }

      // This takes the user which has been dispatched from App.js AuthUsers function
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
    default: 
      return state;
  }
};

export default reducer;