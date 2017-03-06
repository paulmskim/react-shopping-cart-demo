import { connect } from 'react-redux';
import Item from '../presentational/Item';

const mapStateToProps = (state, ownProps) => (
  state.stock.find(item => String(item.id) === ownProps.params.id)
);

export default connect(
  mapStateToProps,
)(Item);
