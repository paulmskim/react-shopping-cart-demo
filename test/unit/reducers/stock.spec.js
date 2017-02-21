import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import stock from '../../../src/js/reducers/stock';

describe('Reducer: stock', () => {
  describe('remove stock item action', () => {
    it('should remove count from stock item if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 4,
        },
      ];
      const action = {
        type: 'REMOVE_STOCK_ITEM',
        id: 0,
        count: 1,
      };
      const stateAfter = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 3,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stock(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should not remove count from stock item if item id does not match action id', () => {
      const stateBefore = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 4,
        },
      ];
      const action = {
        type: 'REMOVE_STOCK_ITEM',
        id: 1,
        count: 2,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stock(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should only remove count from stock item if item id matches action id', () => {
      const stateBefore = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 4,
        }, {
          id: 1,
          name: 'Item 2',
          description: 'test description',
          price: 15.99,
          count: 6,
        },
      ];
      const action = {
        type: 'REMOVE_STOCK_ITEM',
        id: 0,
        count: 1,
      };
      const stateAfter = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 3,
        }, {
          id: 1,
          name: 'Item 2',
          description: 'test description',
          price: 15.99,
          count: 6,
        },
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stock(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        type: 'REMOVE_STOCK_ITEM',
        id: 0,
        count: 1,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        stock(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state if unknown action type is provided', () => {
      const stateBefore = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 4,
        },
      ];
      const action = {
        type: 'UNKNOWN_ACTION',
        id: 0,
        count: 3,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stock(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state if no action type is provided', () => {
      const stateBefore = [
        {
          id: 0,
          name: 'Item 1',
          description: 'test description',
          price: 23.99,
          count: 4,
        },
      ];
      const action = {
        id: 0,
        count: 3,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stock(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        id: 0,
        count: 3,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        stock(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
