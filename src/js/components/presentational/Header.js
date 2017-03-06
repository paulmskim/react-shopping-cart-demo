import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ children, cartItems, backButton, cartButton }) => {
  const getBackButton = () => (
    <Link to="/" className="back-button">
      &lt; Back to shop
    </Link>
  );

  const getCartButton = () => (
    <Link to="/cart" className="cart-button">
      Cart ({cartItems})
    </Link>
  );

  return (
    <div className="shopping-cart-app">
      <header className="header">
        <div className="header-contents">
          {backButton ? getBackButton() : ''}
          {cartButton ? getCartButton() : ''}
        </div>
      </header>
      <main className="main">
        {children}
      </main>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  cartItems: PropTypes.number.isRequired,
  backButton: PropTypes.bool.isRequired,
  cartButton: PropTypes.bool.isRequired,
};

export default Header;
