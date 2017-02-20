export const addToCart = (id, count) => (
  {
    type: 'ADD_TO_CART',
    id,
    count,
  }
);

export const removeFromCart = (id) => (
  {
    type: 'REMOVE_FROM_CART',
    id,
  }
);

export const updateCartItem = (id, count) => (
  {
    type: 'UPDATE_CART_ITEM',
    id,
    count,
  }
);

export const updateStockItem = (id, count) => (
  {
    type: 'UPDATE_STOCK_ITEM',
    id,
    count,
  }
);
