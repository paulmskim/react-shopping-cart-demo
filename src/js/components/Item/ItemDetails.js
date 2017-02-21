import React, { PropTypes } from 'react';
import AddItem from './AddItem';

const ItemDetails = ({ id, name, description, price }) => (
  <div className={'item-details item-details-' + id}>
    <h1 className='item-details-name'>
      {name}
    </h1>
    <img
      className='item-details-image'
      src={'/assets/' + name.replace(/\s/g, '-').toLowerCase() + '.jpg'}
    />
    <h2 className='item-details-price'>
      ${price.toFixed(2)}
    </h2>
    <p className='item-details-desc'>
      {description}
    </p>
    <AddItem id={id} />
  </div>
);

ItemDetails.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemDetails;
