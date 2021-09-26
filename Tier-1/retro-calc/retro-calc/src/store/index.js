import { createStore, combineReducers } from "redux";
import calculateReducer from "./reducers/calculateReducer";

// this returns give the state of the reducer current? 
const rootReducer = combineReducers({
  calculator: calculateReducer,
});

// this then stores that rootreducer making a instance?
export default createStore(
  rootReducer,
  // add reduex dev tools extension 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// this then takes from the stores state in the function above to calculated state
export const getExpression = (state) => {
  return state.calculator.expression;
};

// this gets from the store value the calculator totoal state 
export const getTotal = (state) => {
  return state.calculator.total;
};
