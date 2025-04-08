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





// import {throttle} from 'lodash';
//
// const rootReducer = combineReducers({
//   counterV3: counterV3Reducer,
// });
//
// const persistedState = loadState();
//
// export const store = configureStore({
//   reducer: rootReducer,
//   preloadedState: persistedState,
// });
//
// store.subscribe(throttle(() => {
//   saveState({
//     counterV3: store.getState().counterV3,
//   });
// }, 1000));
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;