import React, { PropTypes } from 'react';
import getOptionsArray from '../../functions/getOptionsArray';

const AddItem = ({ id, count, onSubmit }) => {
  if (!count) {
    return (
      <p className="item-sold-out">
        Sold out!
      </p>
    );
  }

  return (
    <form
      className="item-add-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e, id);
      }}
    >
      <span className="item-qty-label">
        Qty:
      </span>
      <select className="item-qty">
        {getOptionsArray(count).map(num => (
          <option
            key={num}
            value={num}
          >
            {num}
          </option>
        ))}
      </select>
      <button
        className="item-add-button"
        type="submit"
      >
        Add to cart
      </button>
    </form>
  );
};

AddItem.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddItem;
