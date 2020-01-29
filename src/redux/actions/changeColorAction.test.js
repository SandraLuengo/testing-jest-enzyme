import React from 'react';
import configureStore from 'redux-mock-store';
import { changeColorAction } from './changeColorAction';


const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  it('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'TOGGLE_COLOR',
        newValue: 'true',
      },
    ];
    store.dispatch(changeColorAction('true'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

