export const changeMessage = (text) => {
  return {
    type: 'MESSAGE_CHANGE',
    text,
  };
};
