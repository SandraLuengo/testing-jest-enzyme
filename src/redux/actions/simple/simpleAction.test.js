import React from 'react';
import configureStore from 'redux-mock-store';
import { simpleAction } from './simpleAction';


const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  it('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'SIMPLE_ACTION',
        payload: 'Pepe',
      },
    ];
    store.dispatch(simpleAction('Pepe'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

