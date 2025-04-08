import {beforeEach, expect, test} from 'vitest';
import {
    ActionType,
    counterV3Reducer,
    incrementCounterV3AC,
    resetCounterV3AC
} from '@/features/model/counterV3Reducer.ts';


let initialState: number;

beforeEach( () => {
    initialState = 3;
});

test('Counter reducer should increase the value by 1', () => {
    const action: ActionType = incrementCounterV3AC();
    const endState = counterV3Reducer(initialState, action);

    expect(endState).toBeDefined();
    expect(endState).toBe(4);
})

test('Counter reducer should reset the value by 0', () => {
    const startValues = [0, 1, 2];

    startValues.forEach(value => {
        const action: ActionType = resetCounterV3AC({ startValue: value });
        const endState = counterV3Reducer(initialState, action);

        expect(endState).toBeDefined();
        expect(endState).toBe(value);
    })
})