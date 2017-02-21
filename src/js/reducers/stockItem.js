const stockItem = (state, action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        count: state.count - action.count,
      };
    default:
      return state;
  }
};

export default stockItem;
