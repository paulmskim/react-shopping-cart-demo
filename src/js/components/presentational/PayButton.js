import React, { PropTypes } from 'react';

const PayButton = ({ onPayClick }) => (
  <button
    type="button"
    className="cart-pay-button"
    onClick={() => onPayClick()}
  >
    Pay now
  </button>
);

PayButton.propTypes = {
  onPayClick: PropTypes.func.isRequired,
};

export default PayButton;
