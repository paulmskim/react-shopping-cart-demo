import { connect } from 'react-redux';
import { addToCart, updateCartItem } from '../../actions/actions';
import AddItem from '../presentational/AddItem';

const getSelectedValue = (e) => (
  e.target.getElementsByClassName('item-qty')[0].value
);

const mapStateToProps = (state, ownProps) => (
  {
    id: ownProps.id,
    count: state.stock.find(item => item.id === ownProps.id).count,
    inCart: state.cart.some(item => item.id === ownProps.id),
  }
);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const onSubmit = stateProps.inCart ? updateCartItem : addToCart;

  return Object.assign({}, ownProps, stateProps, dispatchProps, {
    onSubmit: (e, id) => {
      dispatchProps.dispatch(onSubmit(id, getSelectedValue(e)));
    },
  });
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(AddItem);
