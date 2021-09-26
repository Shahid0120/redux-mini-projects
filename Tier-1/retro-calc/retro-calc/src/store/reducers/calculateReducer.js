import * as types from "../types";
import calculate from "../../utils/calculate";


// makes the initial state from expresion and total
let initialState = {
  expression: "",
  total: 0,
};

// actions is like the eventlistener 

export default (state = initialState, action) => {
    // takes based upon the action that is done
  switch (action.type) {
      // this is one case of a actions 
    case types.SET_EXPRESSION:
      let expression = state.expression + action.payload;
      // returns new state data
      return {
          // returns all the state data from the storafe
        ...state,
        // plus the new expresion state 
        expression,
        // plus the new totol state 
        total: calculate(expression),
      };
      // if the reducer doenst recognise the action tpyes , then returns the exsiting state unchanged
    default:
      return state;
  }
};