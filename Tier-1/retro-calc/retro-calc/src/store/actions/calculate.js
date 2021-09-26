// this is for all the actions creatorsexport
// action creator needs to do is to dispatch a single action to the store.
export const calculate = (expression) => {
  return {
    type: "SET_EXPRESSION",
    payload: expression,
  };
};
