import { connect } from 'react-redux';
import Header from './LocationHeader/Header';

const showBackButton = (pathname) => (
  pathname !== '/' ? true : false
);

const showCartButton = (pathname) => (
  !pathname.includes('cart') ? true : false
);

const mapStateToProps = (state, ownProps) => (
  {
    children: ownProps.children,
    cartItems: state.cart.length,
    backButton: showBackButton(ownProps.location.pathname),
    cartButton: showCartButton(ownProps.location.pathname),
  }
);

const LocationHeader = connect(
  mapStateToProps
)(Header);

export default LocationHeader;
