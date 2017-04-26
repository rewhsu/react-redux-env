import { combineReducers } from 'redux';

const displayText = (state = '', action) => {
  console.log(action);
  switch (action.type) {
    case 'MESSAGE_CHANGE':
      return action.text;
    default:
      return state;
  }
};

const myApp = combineReducers({
  message: displayText,
});

export default myApp;
