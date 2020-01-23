const initialState = {
  contact: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        contact: action.newValue,
      };
    default:
      return state;
  }
};
