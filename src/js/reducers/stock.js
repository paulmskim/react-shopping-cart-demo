import stockItem from './stockItem';

const stock = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_STOCK_ITEM':
      return state.map(item => stockItem(item, action));
    default:
      return state;
  }
};

export default stock;
