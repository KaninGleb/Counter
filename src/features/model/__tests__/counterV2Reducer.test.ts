import {beforeEach, expect, test} from 'vitest';
import {ActionType, counterV2Reducer, IncrementCounterV2AC, ResetCounterV2AC} from '../counterV2Reducer.ts';

let initialState: number;

beforeEach( () => {
    initialState = 3;
});

test('Counter reducer should increase the value by 1', () => {
    const action: ActionType = IncrementCounterV2AC();
    const endState = counterV2Reducer(initialState, action);

    expect(endState).toBeDefined();
    expect(endState).toBe(4);
})

test('Counter reducer should reset the value by 0', () => {
    const startValues = [0, 1, 2];

    startValues.forEach(value => {
        const action: ActionType = ResetCounterV2AC(value);
        const endState = counterV2Reducer(initialState, action);

        expect(endState).toBeDefined();
        expect(endState).toBe(value);
    })
})