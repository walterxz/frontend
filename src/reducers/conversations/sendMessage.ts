const sendMessage = (state, payload) => {
  const newState = { ...state.current };
  newState.messages.push(payload);
  return { ...state, current: newState };
};

export default sendMessage;
