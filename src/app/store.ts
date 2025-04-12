import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterV3Reducer} from '@/features/model';
import {loadState, saveState} from '@/app/localStorage.ts';


const rootReducer = combineReducers({
  counterV3: counterV3Reducer
})

const persistedState = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
})

store.subscribe(() => {
  saveState(store.getState());
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;