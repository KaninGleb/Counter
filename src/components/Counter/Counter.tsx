import {useEffect, useState} from 'react';
import {Button} from '../Button/Button.tsx';
import s from './Counter.module.css';
import btn from '../Button/Button.module.css';

type CounterType = {
    startValue: number
    maxValue: number
    isEditing: boolean
    error: string
}

export const Counter = ( {startValue, maxValue, isEditing, error}: CounterType ) => {
    const [num, setNum] = useState(startValue);

    useEffect( () => {
        setNum(startValue);
    }, [startValue, maxValue]);

    const incrementHandler = () => setNum(prev => prev + 1);
    const resetHandler = () => setNum(startValue);

    const isIncDisabled = !!error || isEditing || num >= maxValue;
    const isResetDisabled = !!error || isEditing;

    return (
        <div className={s.blockWrapper}>
            <div className={s.scoreWrapper}>
                {error ? (
                    <span className={`${s.score} ${s.error}`}>{error}</span>
                ) : (
                    <span className={`${s.score} ${isEditing ? s.editing : (num >= maxValue ? s.max : '')}`}>
                        {isEditing ? 'Enter values and press «Set»' : num}
                    </span>
                )}
            </div>

            <div className={btn.btnWrapper}>
                <Button
                    title={'Inc'}
                    className={isIncDisabled ? btn.disabledButton : ''}
                    disabled={isIncDisabled}
                    onClick={incrementHandler}
                />
                <Button
                    title={'Reset'}
                    className={isResetDisabled ? btn.disabledButton : ''}
                    disabled={isResetDisabled}
                    onClick={resetHandler}
                />
            </div>
        </div>
    )
}