import React, { PropTypes } from 'react';
import AddItem from '../container/AddItem';

const Item = ({ id, name, description, price }) => (
  <div className={`item item-${id}`}>
    <img
      src={`/assets/${name.replace(/\s/g, '-').toLowerCase()}.jpg`}
      className="item-image"
      alt={name}
    />
    <div className="item-details">
      <h1 className="item-name">
        {name}
      </h1>
      <h2 className="item-price">
        ${price.toFixed(2)}
      </h2>
      <p className="item-desc">
        {description}
      </p>
      <AddItem id={id} />
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
