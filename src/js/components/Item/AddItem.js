import { connect } from 'react-redux';
import { addToCart, updateCartItem } from '../../actions/actions';
import AddItemForm from './AddItemForm';

const getSelectedValue = (e) => (
  e.target.getElementsByClassName('item-details-qty')[0].value
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

const AddItem = connect(
  mapStateToProps,
  null,
  mergeProps
)(AddItemForm);

export default AddItem;
