import {RootState} from '@/app/store.ts';


export const selectCounterV3 = (state: RootState): number => state.counterV3;