import simpleReducer from './simpleReducer';

describe('SIMPLE_ACTION', () => {
  it('initialState is correct', () => {
    const action = { type: 'TESTING_SIMPLE_ACTION' };
    const initialState = { contact: 1 };
    // expect(simpleReducer(undefined, action)).toEqual(initialState);
    expect(simpleReducer(undefined, action)).toMatchSnapshot();
  });
  it('returns the correct state', () => {
    const action = { type: 'SIMPLE_ACTION', payload: 'pedro' };
    const expectedState = { contact: 'pedro' };
    // expect(simpleReducer(undefined, action)).toEqual(expectedState);
    expect(simpleReducer(undefined, action)).toMatchSnapshot();
  });
});

