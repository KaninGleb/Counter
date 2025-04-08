import {useSelector} from 'react-redux';
import {RootState} from '@/app/store.ts';


export const useCounterV3Selector = useSelector.withTypes<RootState>();