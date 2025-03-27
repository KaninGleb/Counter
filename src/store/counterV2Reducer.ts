import {initialValues, initialValuesType} from '../data/initialValues.ts';

type IncrementCounterV2AT = ReturnType<typeof IncrementCounterV2AC>;
type ResetCounter2AT = ReturnType<typeof ResetCounterV2AC>;

export type ActionType =
  | IncrementCounterV2AT
  | ResetCounter2AT;

const initialState: initialValuesType = initialValues;

export const counterV2Reducer = (state = initialState.startValue, action: ActionType): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'RESET':
      return action.startValue;

    default:
      return state;
  }
}

export const IncrementCounterV2AC = () => ({
  type: 'INCREMENT',

} as const);

export const ResetCounterV2AC = (startValue: number) => ({
  type: 'RESET',
  startValue,
} as const);