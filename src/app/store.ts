import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterV3Reducer} from '@/features/model/counterV3Reducer.ts';


const rootReducer = combineReducers({
  counterV3: counterV3Reducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;