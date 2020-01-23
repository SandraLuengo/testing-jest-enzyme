export const createContact = () => dispatch => {
  dispatch({
    type: 'CREATE_NEW_CONTACT',
    payload: 'pepe',
  });
};
