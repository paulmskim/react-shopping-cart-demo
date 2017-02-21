import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import getOptionsArray from '../../functions/getOptionsArray';

const CartItem = (
  { id, name, price, count, stockCount, onQtyChange, onRemoveClick }
) => (
  <li className='cart-item'>
    <Link to={'/item/' + id}>
      <img
        className='cart-item-image'
        src={'/assets/' + name.replace(/\s/g, '-').toLowerCase() + '-cart.jpg'}
      />
    </Link>
    <div className='cart-item-info'>
      <Link to={'/item/' + id}>
        <h1 className='cart-item-name'>
          {name}
        </h1>
      </Link>
      <div className='cart-item-value'>
        <span className='cart-item-price'>
          ${price.toFixed(2)}
        </span>
        <span className='cart-item-qty'>
          Qty:
          <select
            className='cart-item-qty-select'
            value={count}
            onChange={(e) => onQtyChange(e, id)}
          >
            {getOptionsArray(stockCount).map(num =>
              <option
                key={num}
                value={num}
              >
                {num}
              </option>
            )}
          </select>
        </span>
      </div>
    </div>
    <a
      href="#"
      className='cart-item-delete'
      onClick={(e) => {
        onRemoveClick(e, id);
      }}
    >
      ×
    </a>
  </li>
);

CartItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  stockCount: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;
