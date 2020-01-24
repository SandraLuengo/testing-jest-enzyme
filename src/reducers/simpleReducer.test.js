import simpleReducer from './simpleReducer';


describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'SIMPLE_ACTION' };
    const initialState = { contact: 1 };
    /* expect(simpleReducer(initialState, initialState)).toEqual(initialState); */
  });
});


describe('SELECT_AVATAR', () => {
  test('returns the correct state', () => {
    const action = { type: 'SIMPLE_ACTION', contact: 1 };
    expect(simpleReducer('', action)).toMatchSnapshot();
  });
});

