import {initialValues} from '@/common/data/initialValues.ts';
import {createAction, createReducer} from '@reduxjs/toolkit';


export const incrementCounterV3AC = createAction('counterV3/increment');
export const resetCounterV3AC = createAction<{ startValue: number }>('counterV3/reset');

type IncrementCounterV3AT = ReturnType<typeof incrementCounterV3AC>;
type ResetCounter2AT = ReturnType<typeof resetCounterV3AC>;

export type ActionType =
  | IncrementCounterV3AT
  | ResetCounter2AT;

const initialState: number = initialValues.startValue;

export const counterV3Reducer = createReducer(initialState, builder => {
  builder
    .addCase(incrementCounterV3AC, (state) => {
      return state + 1;
    })
    .addCase(resetCounterV3AC, (_state, action) => {
      return action.payload.startValue;
    })
})