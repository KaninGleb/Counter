import {useEffect, useState} from 'react';
import {Button} from './Button.tsx';

type CounterType = {
    startValue: number
    maxValue: number
    isEditing: boolean
    error: string | null
}

export const Counter = ( {startValue, maxValue, isEditing, error}: CounterType ) => {
    const [num, setNum] = useState(startValue);

    useEffect( () => {
        setNum(startValue);
    }, [startValue, maxValue]);

    const incrementHandler = () => setNum(prev => prev + 1);
    const resetHandler = () => setNum(startValue);

    const isIncDisabled = error !== null || isEditing || num >= maxValue;
    const isResetDisabled = error !== null || isEditing;

    return (
        <div className={'counter'}>
            <div className={'score-wrapper'}>
                {error ? (
                    <span className={'score error'}>{error}</span>
                ) : (
                    <span className={isEditing ? 'score editing' : (num >= maxValue ? 'score max' : 'score')}>
                        {isEditing ? num : num}
                    </span>
                )}
            </div>

            <div className={'btn-wrapper'}>
                <Button
                    title={'inc'}
                    className={`button ${isIncDisabled ? 'disabled' : ''}`}
                    disabled={isIncDisabled}
                    onClick={incrementHandler}
                />
                <Button
                    title={'reset'}
                    className={`button ${isResetDisabled ? 'disabled' : ''}`}
                    disabled={isResetDisabled}
                    onClick={resetHandler}
                />
            </div>
        </div>
    )
}