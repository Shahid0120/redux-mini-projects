import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/blogPost/BlogPost";
// configureStore specifically accepts an argument called middleware, which is an array of middleware instances

// The Redux store brings together the state, actions, and reducers that make up your app (middleware). The store has several responsibilities:

// Holds the current application state inside
// Allows access to the current state via store.getState();
// Allows state to be updated via store.dispatch(action);
// Registers listener callbacks via store.subscribe(listener);
// Handles unregistering of listeners via the unsubscribe function returned by store.subscribe(listener).
export default configureStore({
    reducer : {
        post : postsReducer
    }
})
