import { configureStore } from "@reduxjs/toolkit";
import userChoicesSlice from "./slices/user-choices";
import correctAnswerSlice from "./slices/correct-answer";

const store = configureStore({
  reducer: {
    userChoices: userChoicesSlice.reducer,
    correctAnswer: correctAnswerSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
