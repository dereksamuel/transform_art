const functionReducer = (state, action, key) => {
  state[key] = action.payload;
};

export default functionReducer;