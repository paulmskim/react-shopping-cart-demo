import React, { PropTypes } from 'react';
import ShopItem from './ShopItem';

const ShopItems = ({ items }) => {
  if (!items.length) {
    return <p className='no-shop-items'>No items</p>;
  }

  return (
    <ul className='shop-item-list'>
      {items.map(item =>
        <ShopItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      )}
    </ul>
  );
};

ShopItems.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ShopItems;
