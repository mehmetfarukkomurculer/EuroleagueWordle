import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playerInterface } from "../../interfaces/playerInterface";

interface userChoicesState {
  userChoices: playerInterface[];
}

const initialState: userChoicesState = {
  userChoices: [],
};

const userChoicesSlice = createSlice({
  name: "userChoices",
  initialState,
  reducers: {
    addNewChoice(state, action: PayloadAction<playerInterface>) {
      state.userChoices = [...state.userChoices, action.payload];
    },
  },
});

export const { addNewChoice } = userChoicesSlice.actions;
export default userChoicesSlice;
