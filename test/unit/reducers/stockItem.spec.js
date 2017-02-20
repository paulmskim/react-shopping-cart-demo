import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import stockItem from '../../../src/js/reducers/stockItem';

describe('Reducer: stockItem', () => {
  describe('update stock item action', () => {
    it('should return state if state id does not match action id', () => {
      const stateBefore = {
        id: 0,
        name: 'Item 1',
        description: 'test description',
        price: 23.99,
        count: 4,
      };
      const action = {
        type: 'UPDATE_STOCK_ITEM',
        id: 1,
        count: 3,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stockItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should update count if state id matches action id', () => {
      const stateBefore = {
        id: 0,
        name: 'Item 1',
        description: 'test description',
        price: 23.99,
        count: 4,
      };
      const action = {
        type: 'UPDATE_STOCK_ITEM',
        id: 0,
        count: 3,
      };
      const stateAfter = {
        ...stateBefore,
        count: 3,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stockItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state if an unknown action type is provided', () => {
      const stateBefore = {
        id: 0,
        name: 'Item 1',
        description: 'test description',
        price: 23.99,
        count: 4,
      };
      const action = {
        type: 'UNKNOWN_ACTION',
        id: 0,
        count: 3,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stockItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state if no action type is provided', () => {
      const stateBefore = {
        id: 0,
        name: 'Item 1',
        description: 'test description',
        price: 23.99,
        count: 4,
      };
      const action = {
        id: 0,
        count: 3,
      };
      const stateAfter = stateBefore;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        stockItem(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
