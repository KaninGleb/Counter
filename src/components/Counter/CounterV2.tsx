import {useReducer} from 'react';
import {Button} from '../Button/Button.tsx';
import {counterV2Reducer, IncrementCounterV2AC, ResetCounterV2AC} from '../../store/counterV2Reducer.ts';
import s from './Counter.module.css';
import btn from '../Button/Button.module.css';

type CounterType = {
    startValue: number
    maxValue: number
    error: string
    setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV2 = ( {startValue, maxValue, error, setIsSettingsOpen}: CounterType ) => {
    const [num, dispatchNum] = useReducer(counterV2Reducer, startValue);

    const incrementHandler = () => dispatchNum(IncrementCounterV2AC());
    const resetHandler = () => dispatchNum(ResetCounterV2AC(startValue));

    const setHandler = () => {
        if (setIsSettingsOpen) {
            setIsSettingsOpen(true);
        }
    }

    const isIncDisabled = !!error  || num >= maxValue;
    const isResetDisabled = !!error;

    return (
        <div className={s.blockWrapper}>
            <div className={s.scoreWrapper}>
                <span className={`${s.score} ${num >= maxValue ? s.max : ''}`}>
                    {num}
                </span>
            </div>

            <div className={`${btn.btnWrapper} ${btn.v2}`}>
                <Button
                    title={'Inc'}
                    className={isIncDisabled ? btn.disabledButton : ''}
                    disabled={isIncDisabled}
                    onClick={incrementHandler}
                />
                <Button
                    title={'Reset'}
                    disabled={isResetDisabled}
                    onClick={resetHandler}
                />
                <Button
                    title={'Set'}
                    disabled={isResetDisabled}
                    onClick={setHandler}
                />
            </div>
        </div>
    )
}