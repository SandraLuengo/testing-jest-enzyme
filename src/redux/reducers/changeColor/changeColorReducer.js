import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      return {
        toggleColor: action.payload,
      };
    default:
      return state;
  }
};
