import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { playerInterface } from "../../interfaces/playerInterface";

interface correctAnswerState {
  correctAnswer: playerInterface | null;
}

const initialState: correctAnswerState = {
    correctAnswer: null,
};

const correctAnswerSlice = createSlice({
  name: "correctAnswer",
  initialState,
  reducers: {
    setCorrectAnswer(state, action: PayloadAction<playerInterface>) {
      state.correctAnswer = action.payload;
    },
  },
});

export const { setCorrectAnswer } = correctAnswerSlice.actions;
export default correctAnswerSlice;