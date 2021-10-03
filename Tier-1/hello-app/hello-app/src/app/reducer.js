const number = Math.random();
// we need the initial state of the actions
const initialState = {
  loginInButton: [
    { id: number, text: "false" },
    { id: number, text: "true" },
  ],
  SubmitForm: [{ id: number, username: "hi", password: "poo" }],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "loginInButton/click": {
      return {
        ...state,
        loginInButton: [
          ...state.loginInButton,
          {
            id: number,
            text: action.payload,
          },
        ],
      };
    }
    case "SubmitForm": {
      return {
        ...state,
        SubmitForm: [
          ...state.SubmitForm,
          {
            id: number,
            username: action.payload,
            password: action.payload,
          },
        ],
      };
    }
    default:
      return state;
  }
}

export default appReducer;
// export const rootReducer = combineReducers({
//   // Define a top-level state field named `todos`, handled by `todosReducer`
//   loginButton: loginButtonReducer,
// });
