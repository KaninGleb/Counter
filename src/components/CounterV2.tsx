import {useReducer} from 'react';
import {Button} from './Button.tsx';
import {counterReducer} from '../store/counterReducer.tsx';

type CounterType = {
    startValue: number
    maxValue: number
    error: string
    setIsSettingsOpen: (isSettingOpen: boolean) => void
}

export const CounterV2 = ( {startValue, maxValue, error, setIsSettingsOpen}: CounterType ) => {
    const [num, dispatchNum] = useReducer(counterReducer, startValue);

    const incrementHandler = () => dispatchNum({ type: 'INCREMENT' });
    const resetHandler = () => dispatchNum( {type: 'RESET'} );

    const setHandler = () => {
        if (setIsSettingsOpen) {
            setIsSettingsOpen(true);
        }
    }

    const isIncDisabled = !!error  || num >= maxValue;
    const isResetDisabled = !!error;

    return (
        <div className={'block-wrapper'}>
            <div className={'score-wrapper'}>
                <span className={num >= maxValue ? 'score max' : 'score'}>
                    {num}
                </span>
            </div>

            <div className={'btn-wrapper v2'}>
                <Button
                    title={'Inc'}
                    className={isIncDisabled ? 'disabled' : ''}
                    disabled={isIncDisabled}
                    onClick={incrementHandler}
                />
                <Button
                    title={'Reset'}
                    className={isResetDisabled ? 'disabled' : ''}
                    disabled={isResetDisabled}
                    onClick={resetHandler}
                />
                <Button
                    title={'Set'}
                    className={isResetDisabled ? 'disabled' : ''}
                    disabled={isResetDisabled}
                    onClick={setHandler}
                />
            </div>
        </div>
    )
}