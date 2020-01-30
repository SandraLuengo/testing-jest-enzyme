import changeColorReducer from './changeColorReducer';

describe('TOGGLE_COLOR', () => {
  it('initialState is correct', () => {
    const action = { type: 'TESTING_TOGGLE_COLOR' };
    const initialState = { toggleColor: false };
    // expect(changeColorReducer(undefined, action)).toEqual(initialState);
    expect(changeColorReducer(undefined, action).contact).toMatchSnapshot();
  });
  it('returns the correct state', () => {
    const action = { type: 'TOGGLE_COLOR', payload: true };
    const expectedState = { toggleColor: true };
    // expect(changeColorReducer(undefined, action)).toEqual(expectedState);
    expect(changeColorReducer(undefined, action)).toMatchSnapshot();
  });
});

