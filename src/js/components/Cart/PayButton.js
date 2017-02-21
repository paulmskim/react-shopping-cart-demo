import React, { PropTypes } from 'react';

const PayButton = ({ onPayClick }) => (
  <button type='button' onClick={() => onPayClick()}>
    Pay now
  </button>
);

PayButton.PropTypes = {
  onPayClick: PropTypes.func.isRequired,
};

export default PayButton;
