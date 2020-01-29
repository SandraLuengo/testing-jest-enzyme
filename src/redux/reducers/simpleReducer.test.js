import simpleReducer from './simpleReducer';

describe('SIMPLE_ACTION', () => {
  it('initialState is correct', () => {
    const action = { type: 'TESTING_SIMPLE_ACTION' };
    const initialState = 1;
    expect(simpleReducer(undefined, action)).toMatchSnapshot();
    // expect(simpleReducer(undefined, action).contact).toEqual(initialState);
  });
  it('returns the correct state', () => {
    const action = { type: 'SIMPLE_ACTION', newValue: 'pedro' };
    const expectedState = { contact: 'pedro' };
    expect(simpleReducer(undefined, action)).toEqual(expectedState);
    // expect(simpleReducer(undefined, action)).toMatchSnapshot();
  });
});

