
export type ActionType = {
    type: 'INCREMENT' | 'RESET'
}

export const counterReducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'RESET':
            return 0;

        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}