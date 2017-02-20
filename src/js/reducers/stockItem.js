const stockItem = (state, action) => {
  switch (action.type) {
    case 'UPDATE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};

export default stockItem;
