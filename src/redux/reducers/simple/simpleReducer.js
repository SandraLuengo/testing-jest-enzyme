import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        contact: action.payload,
      };
    default:
      return state;
  }
};
