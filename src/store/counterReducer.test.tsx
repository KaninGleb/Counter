import {beforeEach, expect, test} from 'vitest';
import {ActionType, counterReducer} from './counterReducer.tsx';

let initialState: number;

beforeEach( () => {
    initialState = 3;
});

test('Counter reducer should increase the value by 1', () => {
    const action: ActionType = { type: 'INCREMENT' };
    const endState = counterReducer(initialState, action);

    expect(endState).toBeDefined();
    expect(endState).toBe(4);
})

test('Counter reducer should reset the value by 0', () => {
    const action: ActionType = { type: 'RESET' };
    const endState = counterReducer(initialState, action);

    expect(endState).toBeDefined();
    expect(endState).toBe(0);
})