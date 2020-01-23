/* const initialState = {
  contact: 'sandra',
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'CREATE_NEW_CONTACT':
      console.log(1);
      return {
        ...state,
        contact: action.newValue,
      };
    default:
      return state;
  }
}
 */

export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_NEW_CONTACT':
      console.log('WTF!');
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
