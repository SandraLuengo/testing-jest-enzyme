export const simpleAction = (newValue) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    newValue,
  });
};
