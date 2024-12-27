// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { orderReducer } from './reducer';

export const store = configureStore({
  reducer: orderReducer,
  // thunk middleware is included by default in configureStore
});

export type RootState = ReturnType<typeof store.getState>;
// You might also want to export the dispatch type
export type AppDispatch = typeof store.dispatch;