import { connect } from 'react-redux';
import ShopItems from './ShopItems';

const mapStateToProps = (state) => (
  {
    items: state.stock,
  }
);

const ShopItemList = connect(
  mapStateToProps
)(ShopItems);

export default ShopItemList;
