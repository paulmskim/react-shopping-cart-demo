import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ShopItem = ({ id, name, price }) => (
  <li className={`shop-item shop-item-${id}`}>
    <Link to={`/item/${id}`}>
      <div className="shop-item-container">
        <img
          src={`assets/${name.replace(/\s/g, '-').toLowerCase()}-shop.jpg`}
          className="shop-item-image"
          alt={name}
        />
        <h1 className="shop-item-name">
          {name}
        </h1>
        <h2 className="shop-item-price">
          ${price.toFixed(2)}
        </h2>
      </div>
    </Link>
  </li>
);

ShopItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShopItem;
