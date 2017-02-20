import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import cartItem from '../../../src/js/reducers/cartItem';

describe('Reducer: cartItem', () => {
  describe('add to cart action', () => {
    it('should add item to cart', () => {
      const stateBefore = {};
      const action = {
        type: 'ADD_TO_CART',
        id: 0,
        count: 1,
      };
      const stateAfter = {
        id: 0,
        count: 1,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('remove from cart action', () => {
    it('should return false if state id matches action id', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 0,
      };
      const stateAfter = false;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.equal(stateAfter);
    });

    it('should return true if state id does not match action id', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 1,
      };
      const stateAfter = true;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.equal(stateAfter);

    });
  });

  describe('update cart item action', () => {
    it('should return state if state id does not match action id', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 1,
        count: 2,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should update count if state id matches action id', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 0,
        count: 2,
      };
      const stateAfter = {
        id: 0,
        count: 2,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state if an unknown action type is provided', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        type: 'UNKNOWN_ACTION',
        id: 0,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state if no action type is provided', () => {
      const stateBefore = {
        id: 0,
        count: 1,
      };
      const action = {
        id: 0,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cartItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
