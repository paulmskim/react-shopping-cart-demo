import { connect } from 'react-redux';
import {
  removeFromCart,
  updateCartItem,
  removeStockItem,
} from '../../actions/actions';
import Cart from '../presentational/Cart';

const getSelectedValue = e => e.target.value;

const mapStateToProps = state => (
  {
    cart: state.cart.map((cartItem) => {
      const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
      return {
        id: cartItem.id,
        name: item.name,
        price: item.price,
        count: cartItem.count,
        stockCount: item.count,
      };
    }),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onQtyChange: (e, id) => {
      dispatch(updateCartItem(id, getSelectedValue(e)));
    },

    onRemoveClick: (e, id) => {
      e.preventDefault();
      dispatch(removeFromCart(id));
    },

    dispatch,
  }
);

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, ownProps, stateProps, dispatchProps, {
    onPayClick: () =>
      stateProps.cart.map(item => (
        (() => {
          dispatchProps.dispatch(removeStockItem(item.id, item.count));
          dispatchProps.dispatch(removeFromCart(item.id));
        })()
      )),
  })
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Cart);
