import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "Hi there guys this is my first blog post",
  },
  {
    id: "2",
    title: "Second Post!",
    content: "Hi there guys this is my Second blog post",
  },
];

// why can we push cause we are making a mutlable copy of the immutable state array from post within the useSlice functon 

const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {
      postAdded(state,action) {
          state.push(action)
      }
  },
});

export const { postAdded } = postsSlice.actions;
export default postSlice.reducer;
