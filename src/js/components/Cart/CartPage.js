import React, { PropTypes } from 'react';
import CartItems from './CartItems';
import Total from './Total';
import PayButton from './PayButton';

const CartPage = ({ cart, onQtyChange, onRemoveClick, onPayClick }) => (
  <div className='cart'>
    <h1 className='cart-header'>My Cart</h1>
    <CartItems
      cart={cart}
      onQtyChange={onQtyChange}
      onRemoveClick={onRemoveClick}
    />
    <Total cart={cart} />
    <PayButton onPayClick={onPayClick} />
  </div>
);

CartPage.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onPayClick: PropTypes.func.isRequired,
};

export default CartPage;
