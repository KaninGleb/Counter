import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/app/store.ts';


export const useCounterV3Dispatch = useDispatch.withTypes<AppDispatch>();