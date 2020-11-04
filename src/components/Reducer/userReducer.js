export const initialState = null;
export const reducer = (state, action) => {
  let response = action.payload;
  if (action.type == "USER") {
    return {
      ...state,
      ...response,
    };
  }
  if (action.type == "CLEAR") {
    return null;
  }
  return state;
};
