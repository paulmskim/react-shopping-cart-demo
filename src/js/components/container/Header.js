import { connect } from 'react-redux';
import Header from '../presentational/Header';

const showBackButton = pathname => pathname !== '/';

const showCartButton = pathname => !pathname.includes('cart');

const mapStateToProps = (state, ownProps) => (
  {
    children: ownProps.children,
    cartItems: state.cart.length,
    backButton: showBackButton(ownProps.location.pathname),
    cartButton: showCartButton(ownProps.location.pathname),
  }
);

export default connect(
  mapStateToProps,
)(Header);
