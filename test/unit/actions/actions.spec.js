import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import {
  addToCart,
  removeFromCart,
  updateCartItem,
  removeStockItem
} from '../../../src/js/actions/actions';

describe('Actions', () => {
  describe('add to cart action', () => {
    it('should return action add to cart with id and count provided', () => {
      const inputId = 0;
      const inputCount = 1;
      const output = {
        type: 'ADD_TO_CART',
        id: inputId,
        count: inputCount,
      };

      deepFreeze(inputId);
      deepFreeze(inputCount);

      expect(
        addToCart(inputId, inputCount)
      ).to.deep.equal(output);
    });
  });

  describe('remove from cart action', () => {
    it('should return action remove from cart with id provided', () => {
      const inputId = 0;
      const output = {
        type: 'REMOVE_FROM_CART',
        id: inputId,
      };

      deepFreeze(inputId);

      expect(
        removeFromCart(inputId)
      ).to.deep.equal(output);
    });
  });

  describe('update cart item action', () => {
    it('should return action update cart item with id and count provided', () => {
      const inputId = 0;
      const inputCount = 2;
      const output = {
        type: 'UPDATE_CART_ITEM',
        id: inputId,
        count: inputCount,
      };

      deepFreeze(inputId);
      deepFreeze(inputCount);

      expect(
        updateCartItem(inputId, inputCount)
      ).to.deep.equal(output);
    });
  });

  describe('remove stock item action', () => {
    it('should return action remove stock item with id and count provided', () => {
      const inputId = 0;
      const inputCount = 1;
      const output = {
        type: 'REMOVE_STOCK_ITEM',
        id: inputId,
        count: inputCount,
      };

      deepFreeze(inputId);
      deepFreeze(inputCount);

      expect(
        removeStockItem(inputId, inputCount)
      ).to.deep.equal(output);
    });
  });
});
