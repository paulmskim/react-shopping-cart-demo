import cartItem from './cartItem';

const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        cartItem(undefined, action),
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(item => cartItem(item, action));
    case 'UPDATE_CART_ITEM':
      return state.map(item => cartItem(item, action));
    default:
      return state;
  }
};

export default cart;
