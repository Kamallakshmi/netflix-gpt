import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // as soonas login this reducer action(addUser) dispatched and add it to the redux store.
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
