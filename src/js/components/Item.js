import { connect } from 'react-redux';
import ItemDetails from './Item/ItemDetails';

const mapStateToProps = (state, ownProps) => (
  state.stock.find(item => String(item.id) === ownProps.params.id)
);

const Item = connect(
  mapStateToProps
)(ItemDetails);

export default Item;
