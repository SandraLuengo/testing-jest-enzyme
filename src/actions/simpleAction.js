export const simpleAction = (variable) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: variable,
  });
};
