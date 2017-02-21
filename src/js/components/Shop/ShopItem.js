import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ShopItem = ({ id, name, price }) => (
  <li className={'item item-' + id}>
    <Link to={'/item/' + id}>
      <div className='item-container'>
        <img
          className='item-image'
          src={'assets/' + name.replace(/\s/g, '-').toLowerCase() + '-shop.jpg'}
        />
        <h1 className='item-name'>
          {name}
        </h1>
        <h2 className='item-price'>
          ${price.toFixed(2)}
        </h2>
      </div>
    </Link>
  </li>
);

ShopItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShopItem;
