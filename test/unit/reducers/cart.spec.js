import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import cart from '../../../src/js/reducers/cart';

describe('Reducer: cart', () => {
  describe('add to cart action', () => {
    it('should add item to empty state', () => {
      const stateBefore = [];
      const action = {
        type: 'ADD_TO_CART',
        id: 0,
        count: 1,
      };
      const stateAfter = [
        {
          id: 0,
          count: 1,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should add item to existing state', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'ADD_TO_CART',
        id: 1,
        count: 1,
      };
      const stateAfter = [
        ...stateBefore,
        {
          id: 1,
          count: 1,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should add item to empty state if no state is provided', () => {
      const action = {
        type: 'ADD_TO_CART',
        id: 0,
        count: 1,
      };
      const stateAfter = [
        {
          id: 0,
          count: 1,
        },
      ];

      deepFreeze(action);

      expect(
        cart(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('remove from cart action', () => {
    it('should remove item from cart if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 0,
      };
      const stateAfter = [];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should not remove item from cart if item id does not match action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 1,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should only remove item from cart if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        }, {
          id: 1,
          count: 2,
        },
      ];
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 1,
      };
      const stateAfter = [
        {
          id: 0,
          count: 1,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        type: 'REMOVE_FROM_CART',
        id: 1,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        cart(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('update cart item action', () => {
    it('should update cart item if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 0,
        count: 2,
      };
      const stateAfter = [
        {
          id: 0,
          count: 2,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should not update cart item if item id does not match action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 1,
        count: 2,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should only update cart item if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        }, {
          id: 1,
          count: 2,
        },
      ];
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 0,
        count: 2,
      };
      const stateAfter = [
        {
          id: 0,
          count: 2,
        }, {
          id: 1,
          count: 2,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        type: 'UPDATE_CART_ITEM',
        id: 0,
        count: 2,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        cart(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state if unknown action type is provided', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        type: 'UNKNOWN_ACTION',
        id: 0,
        count: 2,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state if no action type is provided', () => {
      const stateBefore = [
        {
          id: 0,
          count: 1,
        },
      ];
      const action = {
        id: 0,
        count: 2,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        cart(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        id: 0,
        count: 2,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        cart(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
