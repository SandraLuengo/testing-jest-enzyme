import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      return {
        toggleColor: action.newValue,
      };
    default:
      return state;
  }
};
