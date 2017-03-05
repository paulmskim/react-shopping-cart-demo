import { connect } from 'react-redux';
import ShopItems from '../presentational/ShopItems';

const mapStateToProps = (state) => (
  {
    items: state.stock,
  }
);

export default connect(
  mapStateToProps
)(ShopItems);
