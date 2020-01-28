import changeColorReducer from './changeColorReducer';

describe('TOGGLE_COLOR', () => {
  it('initialState is correct', () => {
    const action = { type: 'TESTING_TOGGLE_COLOR' };
    const initialState = false;
    expect(changeColorReducer(undefined, action).toggleColor).toEqual(initialState);
    // expect(simpleReducer(undefined, action).contact).toEqual(initialState);
  });
  it('returns the correct state', () => {
    const action = { type: 'TOGGLE_COLOR', newValue: true };
    const expectedState = { toggleColor: true };
    expect(changeColorReducer(undefined, action)).toEqual(expectedState);
    // expect(simpleReducer(undefined, action)).toMatchSnapshot();
  });
});

